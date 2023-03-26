import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  reducers, removeAfterUnmount = false, children,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name}` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((name: StateSchemaKey) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DELETE ${name}` });
        });
      }
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
