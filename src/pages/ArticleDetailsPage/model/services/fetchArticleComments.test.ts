import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { fetchArticleComments } from './fetchArticleComments';

const testData: Comment[] = [
  {
    id: 1,
    text: 'Test sadasd asd as',
    user: { id: 1, username: 'asdasd', avatar: 'asdasd' },
  },
];

describe('fetchArticleComments', () => {
  test('Fetch comments success', async () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
      },
    };

    const thunk = new TestAsyncThunk(fetchArticleComments, state);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: testData }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(testData);
  });

  test('Fetch comments error', async () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {},
    };

    const thunk = new TestAsyncThunk(fetchArticleComments, state);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: undefined }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
