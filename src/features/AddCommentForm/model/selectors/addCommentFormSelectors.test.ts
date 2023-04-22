import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText } from './addCommentFormSelectors';

describe('addCommentFormSelectors', () => {
  test('getAddCommentFormText should return Test message', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'Test message',
      },
    };

    expect(getAddCommentFormText(state as StateSchema)).toBe('Test message');
  });

  test('getAddCommentFormTest should return default value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAddCommentFormText(state as StateSchema)).toBe('');
  });
});
