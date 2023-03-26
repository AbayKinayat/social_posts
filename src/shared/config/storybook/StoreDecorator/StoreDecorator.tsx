import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';

const defaultReducers = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={initialState}
    asyncReducers={defaultReducers}
  >
    <StoryComponent />
  </StoreProvider>
);
