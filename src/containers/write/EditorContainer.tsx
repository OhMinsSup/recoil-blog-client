import React, { useCallback, useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import Editor from '../../components/write/Editor';
import { editorFormState } from './atoms';

interface EditorContainerProps {}
const EditorContainer: React.FC<EditorContainerProps> = () => {
  const [editor, setEditor] = useRecoilState(editorFormState);
  const resetEditor = useResetRecoilState(editorFormState);

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
      resetEditor();
    };
  }, [resetEditor]);

  return (
    <Editor
      title={editor.title}
      body={editor.body}
      onChangeField={onChangeField}
    />
  );
};

export default EditorContainer;
