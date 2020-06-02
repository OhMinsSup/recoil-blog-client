import { atom, selector } from 'recoil';
import { RECOIL_KEY } from '../../../lib/contants';

interface EditorFormState {
  title: string;
  body: string;
}

export const EditorFormInitState: EditorFormState = {
  title: '',
  body: '',
};

export const editorFormState = atom({
  key: RECOIL_KEY.EDITOR_DATA,
  default: EditorFormInitState,
});

export const editorTagsState = atom<string[]>({
  key: RECOIL_KEY.EDITOR_TAGS_DATA,
  default: [],
});

export const fullEditorFormData = selector({
  key: RECOIL_KEY.EDITOR_FULL_DATA,
  get: ({ get }) => {
    const editor = get(editorFormState);
    const tags = get(editorTagsState);
    const formData = {
      ...editor,
      tags,
    };
    return formData;
  },
});
