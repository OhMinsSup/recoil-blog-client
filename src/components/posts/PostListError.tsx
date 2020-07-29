import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const PostListError = () => {
  return <PostListErrorBlock>에러가 발생했습니다.</PostListErrorBlock>;
};

export default PostListError;

const PostListErrorBlock = styled(Responsive)`
  margin-top: 3rem;
`;
