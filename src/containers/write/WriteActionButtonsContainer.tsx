import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useHistory } from 'react-router-dom';
import useRequest from '../../lib/hooks/useRequest';
import { writePostAPI } from '../../lib/apis/post';
import { fullEditorFormData } from './atoms';
import { useRecoilValue } from 'recoil';

interface WriteActionButtonsContainerProps {}
const WriteActionButtonsContainer: React.FC<WriteActionButtonsContainerProps> = () => {
  const postFormData = useRecoilValue(fullEditorFormData);
  const [_writePost, _, postData] = useRequest(writePostAPI);
  const history = useHistory();

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (postData) {
      const { _id, user } = postData;
      history.push(`/@${user.username}/${_id}`);
    }
  }, [history, postData]);

  // 포스트 등록
  const onPublish = () => {
    _writePost(postFormData);
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  return <WriteActionButtons onCancel={onCancel} onPublish={onPublish} />;
};

export default WriteActionButtonsContainer;
