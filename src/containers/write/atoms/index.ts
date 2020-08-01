import { atom } from 'recoil';
import { RECOIL_KEY } from '../../../lib/contants';

interface EditorFormState {
  title: string;
  body: string;
  tags: string[];
}

export const editorFormState = atom<EditorFormState>({
  key: RECOIL_KEY.EDITOR_DATA,
  default: {
    title: '',
    body: '',
    tags: [],
  },
});
