import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => (
  <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    Profile
  </DynamicModuleLoader>
);

export default ProfilePage;
