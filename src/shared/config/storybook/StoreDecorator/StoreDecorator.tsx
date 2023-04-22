import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetails';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { loginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  // articleDetailsComments: articleDetailsCommentsReducer,
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
