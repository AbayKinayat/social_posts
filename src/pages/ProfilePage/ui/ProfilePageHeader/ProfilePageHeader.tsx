import {
  profileActions, updateProfileData, getProfileReadonly, getProfileData,
} from 'entities/Profile';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Button, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useParams } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import classes from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const profileReadonly = useSelector(getProfileReadonly);
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const toggleReadonly = useCallback(() => {
    dispatch(profileActions.setReadonly(!profileReadonly));
    dispatch(profileActions.resetForm());
  }, [dispatch, profileReadonly]);

  const saveHandler = useCallback(() => {
    if (id) dispatch(updateProfileData(id));
  }, [dispatch, id]);

  return (
    <div className={classes.ProfilePageHeader}>
      <Text
        title={t('profile')}
      />
      {
        canEdit && (
        <div className={classes.actionWrapper}>
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
        )
      }
    </div>
  );
};
