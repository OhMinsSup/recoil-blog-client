import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import Core from './containers/common/Core';

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
