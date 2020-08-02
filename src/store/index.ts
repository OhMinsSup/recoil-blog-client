import { loginFormState, registerFormState } from './auth';
import { editorFormState, postState, readPostQuery } from './post';
import { postsState, paginationState, listPostsQuery } from './posts';
import { userState, userQuery } from './user';

export const atomStore = {
  loginFormState,
  registerFormState,
  editorFormState,
  postState,
  postsState,
  paginationState,
  userState,
};

export const selectorStore = {
  readPostQuery,
  listPostsQuery,
  userQuery,
};
