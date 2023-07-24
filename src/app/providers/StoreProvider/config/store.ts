import {
  CombinedState, configureStore, ReducersMapObject, AnyAction, Reducer,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { NavigateFunction } from 'react-router-dom';
import { $api } from 'shared/api/api';
import { uiReducer } from 'features/UI';
import { createReducerManager } from './reduceManager';
import type { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
  initialState: StateSchema,
  asyncReducer?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer,
    ui: uiReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgs: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>, AnyAction>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArgs,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
