import express from 'express';
import path from 'path';
import ssrMiddleware from './server/ssrMiddleware';

const app = express();

const serve = express.static(path.resolve('./build'), {
  index: false, // "/" 경로에서 index.html 을 보여주지 않도록 설정
});

app.use(serve); // 순서가 중요합니다. serverRender 전에 위치해야 합니다.
app.use(ssrMiddleware);

// 5000 포트로 서버를 가동합니다.
app.listen(5000, () => {
  console.log('SSR server is listening to http://localhost:5000');
});
