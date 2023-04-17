import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchArticleDetail } from 'entities/Article/services/fetchArticleDetail';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
  data: undefined,
  error: '',
  isLoading: false,
};

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
      .addCase(
        fetchArticleDetail.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.data = action.payload;
          state.isLoading = false;
          state.error = '';
        },
      )
      .addCase(
        fetchArticleDetail.pending,
        (state) => {
          state.isLoading = true;
          state.error = '';
        },
      )
      .addCase(
        fetchArticleDetail.rejected,
        (state, action) => {
          state.error = action.payload || '';
          state.isLoading = false;
        },
      );
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
