import React from 'react';
import qs from 'qs';
import { useRecoilValue } from 'recoil';
import { match, useLocation } from 'react-router-dom';

import { paginationState, postsState } from '../../shared/posts';

import Pagination from '../../components/posts/Pagination';

interface PaginationContainerProps {
  match: match<{ username: string }>;
}
const PaginationContainer: React.FC<PaginationContainerProps> = ({ match }) => {
  const location = useLocation();
  const lastPage = useRecoilValue(paginationState);
  const posts = useRecoilValue(postsState);

  const { username } = match.params;
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  if (posts.length === 0) {
    return null;
  }

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(String(page), 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;
