import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import { RouteComponentProps } from 'react-router-dom';

interface PostListPageProps extends RouteComponentProps<{ username: string }> {}
const PostListPage: React.FC<PostListPageProps> = ({ match }) => (
  <>
    <HeaderContainer />
    <PostListContainer match={match} />
    <PaginationContainer match={match} />
  </>
);

export default PostListPage;
