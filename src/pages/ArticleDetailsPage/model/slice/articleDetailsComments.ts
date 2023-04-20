/* eslint-disable max-len */
import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchArticleComments } from '../services/fetchArticleComments';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsMessages',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: '',
    entities: {},
    ids: [],
  }),
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(
      fetchArticleComments.pending,
      (state) => {
        state.error = '';
        state.isLoading = true;
      },
    )
    .addCase(
      fetchArticleComments.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        commentsAdapter.setAll(state, action.payload);
        state.isLoading = false;
        state.error = '';
      },
    )
    .addCase(
      fetchArticleComments.rejected,
      (state, action) => {
        state.error = action.payload || '';
        state.isLoading = false;
      },
    ),
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
