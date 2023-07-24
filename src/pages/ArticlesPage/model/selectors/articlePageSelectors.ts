import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageLoading = (state: StateSchema) => Boolean(state.articlePage?.isLoading);
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error || '';
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || 'small';
export const getArticlePagePage = (state: StateSchema) => state.articlePage?.page || 0;
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 6;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articlePage?._inited;
