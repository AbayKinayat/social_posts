import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchArticleComments = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<string>
>(
  'articleDetailsComments/fetchArticleComments',
  async (articleId, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('error');
    }
  },
);
