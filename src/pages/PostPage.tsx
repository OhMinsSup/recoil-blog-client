import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

interface PostPageProps extends RouteComponentProps<{ postId: string }> {}
const PostPage: React.FC<PostPageProps> = ({ match }) => (
  <div>
    <HeaderContainer />
    <PostViewerContainer match={match} />
  </div>
);

export default PostPage;
