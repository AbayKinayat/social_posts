import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetailsSelectors';
import { addCommentFormActions } from 'features/AddCommentForm';
import { fetchArticleComments } from '../fetchArticleComments';

export const sendArticleComment = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetailsComment/sendArticleComment',
  async (text, {
    rejectWithValue, extra, getState, dispatch,
  }) => {
    try {
      const state = getState();

      const user = getUserAuthData(state);
      const article = getArticleDetailsData(state);

      if (!user || !text || !article) {
        return rejectWithValue('no_data');
      }

      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: user?.id,
        text,
      });

      if (!response.data) {
        throw new Error('add_comment_form_error');
      }

      dispatch(addCommentFormActions.setText(''));
      dispatch(fetchArticleComments(article.id));

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);
