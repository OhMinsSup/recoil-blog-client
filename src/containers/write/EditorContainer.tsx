import React, { useCallback, useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { editorFormState } from '../../shared/post';

import Editor from '../../components/write/Editor';

interface EditorContainerProps {}
const EditorContainer: React.FC<EditorContainerProps> = () => {
  const [editor, setEditor] = useRecoilState(editorFormState);
  const resetEditorForm = useResetRecoilState(editorFormState);

  const onChangeField = useCallback(
    ({ key, value }: { key: string; value: string }) => {
      setEditor((oldEditor) => ({
        ...oldEditor,
        [key]: value,
      }));
    },
    [setEditor],
  );

  useEffect(() => {
    return () => {
      resetEditorForm();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetEditorForm, setEditor]);

  return (
    <Editor
      title={editor.title}
      body={editor.body}
      onChangeField={onChangeField}
    />
  );
};

export default EditorContainer;
