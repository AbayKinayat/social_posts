import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, ReactNode, useMemo } from 'react';

import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode,
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers = {},
}) => {
  const navigate = useNavigate();

  const store = useMemo(
    () => createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
    ),
    [],
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
