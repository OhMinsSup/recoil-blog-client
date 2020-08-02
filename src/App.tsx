import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import Core from './containers/common/Core';

const PostListPage = loadable(() => import('./pages/PostListPage'));
const PostPage = loadable(() => import('./pages/PostPage'));
const WritePage = loadable(() => import('./pages/WritePage'));
const LoginPage = loadable(() => import('./pages/LoginPage'));
const RegisterPage = loadable(() => import('./pages/RegisterPage'));

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route component={PostListPage} path={['/@:username', '/']} exact />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={WritePage} path="/write" exact />
        <Route component={WritePage} path="/write/:postId" />
        <Route component={PostPage} path="/@:username/:postId" />
      </Switch>
      <Core />
    </React.Fragment>
  );
}

export default App;
