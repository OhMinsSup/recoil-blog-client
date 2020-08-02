import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { PostData, postState, editorFormState } from '../../store/post';
import { writePostAPI, updatePostAPI } from '../../lib/apis/post';
import useRequest from '../../lib/hooks/useRequest';

import WriteActionButtons from '../../components/write/WriteActionButtons';

interface WriteActionButtonsContainerProps {
  postId?: string;
}
const WriteActionButtonsContainer: React.FC<WriteActionButtonsContainerProps> = ({
  postId,
}) => {
  const [post] = useRecoilState(postState);
  const [editor] = useRecoilState(editorFormState);
  const [_writePost, _, createData] = useRequest(writePostAPI);
  const [_updatePost, __, updateData] = useRequest(updatePostAPI);

  const history = useHistory();

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    const movePost = (postData: PostData) => {
      const { _id, user } = postData;
      history.push(`/@${user.username}/${_id}`);
    };

    if (createData) {
      movePost(createData);
    }

    if (updateData) {
      movePost(updateData);
    }
  }, [history, createData, updateData]);

  // 포스트 등록
  const onPublish = () => {
    if (post) {
      _updatePost({
        id: post._id,
        ...editor,
      });
      return;
    }
    _writePost({
      ...editor,
    });
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  return (
    <WriteActionButtons
      onCancel={onCancel}
      onPublish={onPublish}
      postId={postId}
    />
  );
};

export default WriteActionButtonsContainer;
