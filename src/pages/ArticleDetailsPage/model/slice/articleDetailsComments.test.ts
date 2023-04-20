import { Comment } from 'entities/Comment';
import { fetchArticleComments } from '../services/fetchArticleComments';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsComments';

const testData: Comment[] = [{ id: 1, text: '1234', user: { id: 1, username: 'abay', avatar: '' } }];

describe('articleDetailsComments', () => {
  test('fetchArticleComments pending', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      entities: {},
      ids: [],
      error: '',
      isLoading: false,
    };

    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentsSchema,
      fetchArticleComments.pending,
    )).toEqual({
      entities: {},
      ids: [],
      error: '',
      isLoading: true,
    });
  });

  test('fetchArticleComments fulfilled', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      entities: {},
      ids: [],
      error: 'asdasd',
      isLoading: true,
    };

    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchArticleComments.fulfilled(testData, '1', ''),
      ),
    ).toEqual({
      entities: {
        // eslint-disable-next-line quote-props
        '1': testData[0],
      },
      ids: [1],
      error: '',
      isLoading: false,
    });
  });

  test('fetchArticleComments rejected', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      entities: {},
      ids: [],
      error: '',
      isLoading: true,
    };

    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchArticleComments.rejected(new Error(), '', '', 'ERROR'),
      ),
    ).toEqual({
      entities: {},
      ids: [],
      error: 'ERROR',
      isLoading: false,
    });
  });
});
