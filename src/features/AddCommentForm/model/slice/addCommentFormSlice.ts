import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

const initialState: AddCommentFormSchema = {
  text: '',
};

const addCommentFormSlice = createSlice({
  name: 'addCommenForm',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { actions: addCommentFormActions } = addCommentFormSlice;
