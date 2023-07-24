import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../selectors/articlePageSelectors';

interface IFetchArticlesProps {
  page?: number
}

export const fetchArticles = createAsyncThunk<
  Article[],
  IFetchArticlesProps,
  ThunkConfig<string>
>(
  'articlePage/fetchArticles',
  async ({ page = 1 }, { extra, rejectWithValue, getState }) => {
    try {
      const limit = getArticlePageLimit(getState());

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
