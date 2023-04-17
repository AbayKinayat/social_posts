import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../model/types/article';

export const fetchArticleDetail = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  'fetchArticleDetail',
  async (articleId, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('error');
    }
  },
);
