import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import { sendArticleComment } from './sendArticleComment';

describe('sendArticleComments', () => {
  const comment = {
    id: 1,
    text: 'Test message',
    user: { id: 1, username: 'abay' },
  };

  test('sendArticleComments success', async () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: '',
        loading: false,
        text: 'Test message',
      },
      user: {
        authData: {
          id: 1,
        },
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
    };
    const response: { data: Comment } = {
      data: comment,
    };

    const thunk = new TestAsyncThunk(sendArticleComment, state);

    thunk.api.post.mockReturnValue(Promise.resolve(response));

    const result = await thunk.callThunk(comment.text);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comment);
  });

  test('sendArticleComments no data error', async () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: '',
      },
    };

    const thunk = new TestAsyncThunk(sendArticleComment, state);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));

    const result = await thunk.callThunk('Test message');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('no_data');
  });

  test('sendArtickeComments add_comment_form_error error', async () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { text: '' },
      user: {
        authData: {
          id: 1,
        },
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
    };

    const thunk = new TestAsyncThunk(sendArticleComment, state);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: null }));

    const result = await thunk.callThunk('test message');

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('add_comment_form_error');
  });
});
