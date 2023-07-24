import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UiSchema } from '../types/UiSchema';

const initialState: UiSchema = {
  scroll: {},
};

interface SetScrollPayload {
  path: string,
  position: number
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScroll(state, { payload }: PayloadAction<SetScrollPayload>) {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: uiActions, reducer: uiReducer } = uiSlice;
