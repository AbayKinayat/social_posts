import {
  fetchProfileData,
  getProfileError,
  getProfileLoading,
  profileActions,
  ProfileCard,
  profileReducer,
  getProfileForm,
  getProfileReadonly,
  getProfileValidateErrors,
  ValidateProfileError,
} from 'entities/Profile';
import {
  ChangeEvent, FC, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text } from 'shared/ui';
import { TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import classes from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const profileForm = useSelector(getProfileForm);
  const profileIsLoading = useSelector(getProfileLoading);
  const profileError = useSelector(getProfileError);
  const profileReadonly = useSelector(getProfileReadonly);
  const profileValidateErrors = useSelector(getProfileValidateErrors);

  const { t } = useTranslation('profile');

  const validateErrorsTranlaters = {
    [ValidateProfileError.INCORRECT_AGE]: t('nocorreect_age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect_country'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect_user_data'),
    [ValidateProfileError.NO_DATA]: t('no_data'),
    [ValidateProfileError.SERVER_ERROR]: t('server_error'),
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const changeFirstHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(profileActions.patchProfile({ first: event.target.value }));
  }, [dispatch]);

  const changeLastnameHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(profileActions.patchProfile({ lastname: event.target.value }));
  }, [dispatch]);

  const changeAgeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(profileActions.patchProfile({ age: Number(event.target.value) }));
  }, [dispatch]);

  const changeCountryHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(profileActions.patchProfile({ country: event.target.value as Country }));
  }, [dispatch]);

  const changeUsernameHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(profileActions.patchProfile({ username: event.target.value }));
  }, [dispatch]);

  const changeAvatarHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(profileActions.patchProfile({ avatar: event.target.value }));
  }, [dispatch]);

  const changeCurrencyHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(profileActions.patchProfile({ currency: event.target.value as Currency }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classes.ProfilePage}>
        <ProfilePageHeader />

        { Boolean(profileValidateErrors.length) && profileValidateErrors.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorsTranlaters[error]}
          />
        )) }

        <ProfileCard
          data={profileForm}
          isLoading={profileIsLoading}
          error={profileError}
          readonly={profileReadonly}
          onChangeFirst={changeFirstHandler}
          onChangeLastname={changeLastnameHandler}
          onChangeAge={changeAgeHandler}
          onChangeCountry={changeCountryHandler}
          onChangeUsername={changeUsernameHandler}
          onChangeAvatar={changeAvatarHandler}
          onChangeCurrency={changeCurrencyHandler}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
