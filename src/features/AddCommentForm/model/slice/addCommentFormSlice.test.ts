import { AddCommentFormSchema } from '../types/AddCommentFormSchema';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
  test('setText', () => {
    const state: AddCommentFormSchema = {
      text: '',
    };

    expect(
      addCommentFormReducer(
        state,
        addCommentFormActions.setText('Test message'),
      ),
    ).toEqual({
      text: 'Test message',
    });
  });
});
