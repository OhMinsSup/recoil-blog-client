import React, { useEffect } from 'react';
import qs from 'qs';
import { match, useLocation } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import PostList from '../../components/posts/PostList';
import PostListError from '../../components/posts/PostListError';

import { listPostsQuery, postsState } from '../../shared/posts';

interface PostListContainerProps {
  match: match<{ username: string }>;
}
const PostListContainer: React.FC<PostListContainerProps> = ({ match }) => {
  const location = useLocation();
  const { username } = match.params;
  const { tag, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const setPosts = useSetRecoilState(postsState);
  const listPostsLoadable = useRecoilValueLoadable(
    listPostsQuery({
      username,
      tag: String(tag),
      page: parseInt(String(page), 10),
    }),
  );

  useEffect(() => {
    if (listPostsLoadable.state === 'hasValue') {
      setPosts(listPostsLoadable.contents);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listPostsLoadable.state, setPosts]);

  switch (listPostsLoadable.state) {
    case 'hasError':
      return <PostListError />;
    case 'loading':
      return null;
    case 'hasValue':
      return (
        <PostList posts={listPostsLoadable.contents} showWriteButton={null} />
      );
  }
};

export default PostListContainer;
