import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsCommentsLoading } from './comments';

describe('comments selectors', () => {
  test('Should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsCommentsLoading(state as StateSchema)).toBe(true);
  });

  test('Shpuld return false', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
      },
    };

    expect(getArticleDetailsCommentsLoading(state as StateSchema)).toBe(false);
  });
});
