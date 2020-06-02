import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { editorTagsState } from './atoms';
import TagBox from '../../components/write/TagBox';

interface TagBoxContainerProps {}
const TagBoxContainer: React.FC<TagBoxContainerProps> = () => {
  const [tags, setTags] = useRecoilState(editorTagsState);

  const onChangeTags = useCallback(
    (tags: string[]) => {
      setTags(() => tags);
    },
    [setTags],
  );

  return <TagBox tags={tags} onChangeTags={onChangeTags} />;
};

export default TagBoxContainer;
