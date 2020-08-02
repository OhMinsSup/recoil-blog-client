import React, { useEffect } from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { match } from 'react-router-dom';

import { readPostQuery } from '../../shared/post';

import EditorContainer from './EditorContainer';
import TagBoxContainer from './TagBoxContainer';
import WriteActionButtonsContainer from './WriteActionButtonsContainer';

interface WriteContainerProps {
  match: match<{ postId?: string }>;
}
const WriteContainer: React.FC<WriteContainerProps> = ({ match }) => {
  const { postId } = match.params;
  const [readPostLoadable, setReadPostLoadable] = useRecoilStateLoadable(
    readPostQuery(postId ? postId : null),
  );

  useEffect(() => {
    if (readPostLoadable.state === 'hasValue') {
      setReadPostLoadable(readPostLoadable.contents);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readPostLoadable.state, setReadPostLoadable]);

  switch (readPostLoadable.state) {
    case 'hasValue':
    default:
      return (
        <>
          <EditorContainer />
          <TagBoxContainer />
          <WriteActionButtonsContainer />
        </>
      );
  }
};

export default WriteContainer;
