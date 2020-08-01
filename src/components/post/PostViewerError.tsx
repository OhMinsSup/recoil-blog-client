import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const PostViewerError = () => {
  return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
};

export default PostViewerError;

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
