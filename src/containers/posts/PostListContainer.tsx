import React, { useEffect } from 'react';
import qs from 'qs';
import { match, useLocation } from 'react-router-dom';
import {
  useRecoilValueLoadable,
  useSetRecoilState,
  useRecoilState,
} from 'recoil';

import { listPostsQuery, postsState } from '../../shared/posts';
import { userState } from '../../shared/user';

import PostList from '../../components/posts/PostList';
import PostListError from '../../components/posts/PostListError';

interface PostListContainerProps {
  match: match<{ username: string }>;
}
const PostListContainer: React.FC<PostListContainerProps> = ({ match }) => {
  const { username } = match.params;

  const location = useLocation();
  const { tag, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const [user] = useRecoilState(userState);
  const setPosts = useSetRecoilState(postsState);
  const listPostsLoadable = useRecoilValueLoadable(
    listPostsQuery({
      username,
      page: parseInt(String(page || 1), 10),
      ...(tag ? { tag: String(tag) } : {}),
    }),
  );

  useEffect(() => {
    if (listPostsLoadable.state === 'hasValue') {
      setPosts(listPostsLoadable.contents);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listPostsLoadable.state, listPostsLoadable.contents, setPosts]);

  switch (listPostsLoadable.state) {
    case 'hasError':
      return <PostListError />;
    case 'loading':
      return null;
    case 'hasValue':
      return (
        <PostList posts={listPostsLoadable.contents} showWriteButton={user} />
      );
  }
};

export default PostListContainer;
