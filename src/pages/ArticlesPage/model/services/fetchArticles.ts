import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articlePage/fetchArticles',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue('error');
    }
  },
);
