import { profileActions, updateProfileData, getProfileReadonly } from 'entities/Profile';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Button, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import classes from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const profileReadonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const toggleReadonly = useCallback(() => {
    dispatch(profileActions.setReadonly(!profileReadonly));
    dispatch(profileActions.resetForm());
  }, [dispatch, profileReadonly]);

  const saveHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classes.ProfilePageHeader}>
      <Text
        title={t('profile')}
      />
      <Button
        className={classes.editBtn}
        theme={ButtonTheme.OUTLINED}
        onClick={toggleReadonly}
      >
        { profileReadonly ? t('edit') : t('cancel')}
      </Button>
      {
        !profileReadonly
        && (
        <Button
          className={classes.saveBtn}
          theme={ButtonTheme.OUTLINED_NEGATIVE}
          onClick={saveHandler}
        >
          {t('save') }
        </Button>
        )
      }
    </div>
  );
};
