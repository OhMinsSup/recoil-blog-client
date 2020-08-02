import React, { useEffect } from 'react';
import qs from 'qs';
import { match, useLocation } from 'react-router-dom';
import { useRecoilStateLoadable, useRecoilState } from 'recoil';

import { listPostsQuery } from '../../shared/posts';
import { userState } from '../../shared/user';

import PostList from '../../components/posts/PostList';
import PostListError from '../../components/posts/PostListError';

interface PostListContainerProps {
  match: match<{ username: string }>;
}
const PostListContainer: React.FC<PostListContainerProps> = ({ match }) => {
  const location = useLocation();
  const { tag, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const { username } = match.params;
  const queryString = {
    username,
    page: parseInt(String(page || 1), 10),
    ...(tag ? { tag: String(tag) } : {}),
  };

  const [user] = useRecoilState(userState);
  const [listPostsLoadable, setListPostsLoadable] = useRecoilStateLoadable(
    listPostsQuery(queryString),
  );

  useEffect(() => {
    console.log(listPostsLoadable.state);
    if (listPostsLoadable.state === 'hasValue') {
      setListPostsLoadable(listPostsLoadable.contents);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listPostsLoadable.state, setListPostsLoadable, location.search]);

  switch (listPostsLoadable.state) {
    case 'hasError':
      return <PostListError />;
    case 'loading':
      return null;
    case 'hasValue':
      return (
        <PostList
          posts={listPostsLoadable.contents.posts}
          showWriteButton={user}
        />
      );
  }
};

export default PostListContainer;
