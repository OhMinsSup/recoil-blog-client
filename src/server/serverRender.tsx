import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import path from 'path';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { FilledContext, HelmetProvider } from 'react-helmet-async';
import App from '../App';
import Html from './Html';

// asset-manifest.json 에서 파일 경로들을 조회합니다.
const statsFile = path.resolve('./build/loadable-stats.json');

type SSROption = {
  url: string;
  loggedIn?: boolean;
  cookie?: string;
};

const serverRender = async ({ url, loggedIn, cookie }: SSROption) => {
  console.log(loggedIn, cookie);
  const context = {};

  const sheet = new ServerStyleSheet();
  const extractor = new ChunkExtractor({ statsFile });
  const helmetContext = {} as FilledContext;

  const Root = (
    <ChunkExtractorManager extractor={extractor}>
      <HelmetProvider context={helmetContext}>
        <StyleSheetManager sheet={sheet.instance}>
          <RecoilRoot>
            <StaticRouter location={url} context={context}>
              <App />
            </StaticRouter>
          </RecoilRoot>
        </StyleSheetManager>
      </HelmetProvider>
    </ChunkExtractorManager>
  );

  try {
  } catch (e) {
    console.error(e);
  }

  const content = ReactDOMServer.renderToString(Root);
  const styledElement = sheet.getStyleElement();
  const html = (
    <Html
      content={content}
      styledElement={styledElement}
      extractor={extractor}
      helmet={helmetContext.helmet}
    />
  );

  const pageHtml = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(
    html,
  )}`;

  return { html: pageHtml };
};

export default serverRender;
