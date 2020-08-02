import { Request, Response, NextFunction } from 'express';
import serverRender from './serverRender';

const ssrMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await serverRender({
      url: req.url,
      // cookie: req.cookies,
      // loggedIn: !!req.cookies['access_token'],
    });

    if (!result) {
      return next();
    }

    res.status(200).send(result.html);
  } catch (e) {
    console.error(e);
  }
};

export default ssrMiddleware;
