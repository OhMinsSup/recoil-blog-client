import { atom, selectorFamily } from 'recoil';
import { RECOIL_KEY } from '../lib/contants';
import { PostData } from './post';
import { listPostsAPI } from '../lib/apis/post';

export interface PostsErrorData {
  error: null;
}

export const postsState = atom<PostData[]>({
  key: RECOIL_KEY.LIST_POSTS_DATA,
  default: [],
});

export const paginationState = atom<number>({
  key: RECOIL_KEY.LIST_PAGINATION_DATA,
  default: 1,
});

type ListPostsQueryParams = {
  page: number;
  tag?: string;
  username?: string;
};

export const listPostsQuery = selectorFamily({
  key: RECOIL_KEY.LIST_POSTS_QUERY,
  get: ({ tag, page, username }: ListPostsQueryParams) => async () => {
    try {
      const response = await listPostsAPI({ tag, page, username });
      return {
        lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
        posts: response.data,
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  set: () => ({ set }, newValue) => {
    if (!newValue) return;
    const postData = newValue as { posts: PostData[]; lastPage: number };
    set(paginationState, postData.lastPage);
    set(postsState, postData.posts);
  },
});
