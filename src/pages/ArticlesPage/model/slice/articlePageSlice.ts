/* eslint-disable max-len */
import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ARTICLES_PAGE_VIEW } from 'shared/const/localStorage';
import { ArticlePageSchema } from '../types/ArticlePageSchema';
import { fetchArticles } from '../services/fetchArticles';

const articlesPageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesPageAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'articlePage',
  initialState: articlesPageAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: '',
    entities: {},
    ids: [],
    view: 'small',
    hasMore: true,
    page: 0,
    limit: 9,
    _inited: false,
  }),
  reducers: {
    setView(state, action: PayloadAction<'small' | 'big'>) {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_PAGE_VIEW, action.payload);
    },
    initView(state) {
      const view = localStorage.getItem(ARTICLES_PAGE_VIEW) as 'small' | 'big' || 'small';
      state.view = view;
      state.limit = view === 'big' ? 6 : 9;
      state._inited = true;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => builder
    .addCase(
      fetchArticles.pending,
      (state) => {
        state.error = '';
        state.isLoading = true;
      },
    )
    .addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        articlesPageAdapter.addMany(state, action.payload);
        state.isLoading = false;
        state.error = '';
        state.hasMore = Boolean(action.payload.length);
        console.log('Boolean(action.payload.length)', Boolean(action.payload.length));
      },
    )
    .addCase(
      fetchArticles.rejected,
      (state, action) => {
        state.error = action.payload || '';
        state.isLoading = false;
      },
    ),
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
