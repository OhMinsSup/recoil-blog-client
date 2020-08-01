import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { editorFormState } from './atoms';

import TagBox from '../../components/write/TagBox';

interface TagBoxContainerProps {}
const TagBoxContainer: React.FC<TagBoxContainerProps> = () => {
  const [editor, setEditor] = useRecoilState(editorFormState);

  const onChangeTags = useCallback(
    (tags: string[]) => {
      setEditor((oldEditor) => ({
        ...oldEditor,
        tags,
      }));
    },
    [setEditor],
  );

  return <TagBox tags={editor.tags} onChangeTags={onChangeTags} />;
};

export default TagBoxContainer;
