import React, { useEffect, useCallback } from 'react';
import { match, useHistory } from 'react-router-dom';
import {
  useResetRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
} from 'recoil';

import { userState } from '../../shared/user';
import { postState, readPostQuery } from '../../shared/post';
import { editorFormState } from '../write/atoms';
import { removePostAPI } from '../../lib/apis/post';

import PostViewer from '../../components/post/PostViewer';
import PostViewerError from '../../components/post/PostViewerError';
import PostActionButtons from '../../components/post/PostActionButtons';

interface PostViewerContainerProps {
  match: match<{ postId: string }>;
}
const PostViewerContainer: React.FC<PostViewerContainerProps> = ({ match }) => {
  const { postId } = match.params;

  const history = useHistory();
  const user = useRecoilValue(userState);
  const post = useRecoilValue(postState);
  const resetEditForm = useResetRecoilState(editorFormState);
  const [readPostLoadable, setReadPostLoadable] = useRecoilStateLoadable(
    readPostQuery(postId),
  );

  useEffect(() => {
    if (readPostLoadable.state === 'hasValue') {
      setReadPostLoadable(readPostLoadable.contents);
    }
    return () => {
      resetEditForm();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readPostLoadable.state, resetEditForm]);

  const ownPost = (user && user._id) === (post && post.user._id);

  const onEdit = useCallback(() => {
    if (!post) return;

    history.push(`/write/${postId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  const onRemove = useCallback(async () => {
    try {
      await removePostAPI(postId);
      history.push('/'); // 홈으로 이동
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  switch (readPostLoadable.state) {
    case 'hasError':
      return <PostViewerError />;
    case 'loading':
      return null;
    case 'hasValue':
      return (
        <PostViewer
          post={post}
          actionButtons={
            ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
          }
        />
      );
  }
};

export default PostViewerContainer;
