import { selectorFamily, atom } from 'recoil';
import { RECOIL_KEY } from '../lib/contants';
import { readPostAPI } from '../lib/apis/post';

export interface PostData {
  _id: any;
  title: string;
  body: string;
  tags: string[];
  publishedDate: Date;
  user: {
    _id: any;
    username: string;
  };
}

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

export const postState = atom<PostData | null>({
  key: RECOIL_KEY.READ_POST_DATA,
  default: null,
});

export const readPostQuery = selectorFamily({
  key: RECOIL_KEY.LIST_POSTS_QUERY,
  get: (postId: string | null) => async () => {
    if (!postId) return null;

    try {
      const response = await readPostAPI(postId);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  set: (postId: string | null) => ({ set }, newValue) => {
    if (!newValue) return;
    const postData = newValue as PostData;
    set(postState, postData);
    set(editorFormState, {
      title: postData.title,
      body: postData.body,
      tags: postData.tags,
    });
  },
});
