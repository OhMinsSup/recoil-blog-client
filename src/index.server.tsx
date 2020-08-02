import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import App from './App';

// asset-manifest.json 에서 파일 경로들을 조회합니다.
const statsFile = path.resolve('./build/loadable-stats.json');

function createPage(
  root: string,
  tags: { scripts: string; links: string; styles: string },
) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
      ${tags.styles}
      ${tags.links}
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        ${root}
      </div>
      ${tags.scripts}
    </body>
    </html>
    `;
}

const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

  const context = {};
  // const initializeState = ({ set }: MutableSnapshot) => {
  //   for (const [key, value] of Storage.entries()) {
  //     set(getAtomWithKey(key), JSON.parse(value).value);
  //   }
  // };

  // 필요한 파일 추출하기 위한 ChunkExtractor
  const extractor = new ChunkExtractor({ statsFile });

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <RecoilRoot>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </RecoilRoot>
    </ChunkExtractorManager>
  );

  ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup 으로 한번 렌더링합니다.
  try {
    //   await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
  } catch (e) {
    return res.status(500);
  }
  // preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
  // JSON 을 문자열로 변환하고 악성스크립트가 실행되는것을 방지하기 위해서 < 를 치환처리

  // 미리 불러와야 하는 스타일 / 스크립트를 추출하고
  const tags = {
    scripts: extractor.getScriptTags(), // 스크립트 앞부분에 리덕스 상태 넣기
    links: extractor.getLinkTags(),
    styles: extractor.getStyleTags(),
  };

  res.send(createPage(root, tags)); // 결과물을 응답합니다.
};

const serve = express.static(path.resolve('./build'), {
  index: false, // "/" 경로에서 index.html 을 보여주지 않도록 설정
});

app.use(serve); // 순서가 중요합니다. serverRender 전에 위치해야 합니다.
app.use(serverRender);

// 5000 포트로 서버를 가동합니다.
app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});
