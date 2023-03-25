import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreator<Return, Args, RejectedValue> =
(arg: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreator<Return, Args, RejectedValue>;

  constructor(actionCreator: ActionCreator<Return, Args, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;
  }

  async callThunk(arg: Args) {
    const action = this.actionCreator(arg);
    return action(this.dispatch, this.getState, undefined);
  }
}
