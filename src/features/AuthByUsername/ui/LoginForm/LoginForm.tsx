import { ChangeEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../services/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

export const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const usernameChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(e.target.value));
  }, [dispatch]);

  const passwordChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(e.target.value));
  }, [dispatch]);

  const loginClickHandler = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(classes.LoginForm)}>
      <Text title={t('auth_form')} />
      {
        t('auth_error') && <Text text={error} theme={TextTheme.ERROR} />
      }
      <Input
        className={classes.input}
        type="text"
        placeholder={t('type_username')}
        value={username}
        autofocus
        onChange={usernameChangeHandler}
      />
      <Input
        className={classes.input}
        type="text"
        placeholder={t('type_password')}
        value={password}
        onChange={passwordChangeHandler}
      />
      <Button
        className={classes.loginButton}
        theme={ButtonTheme.OUTLINED}
        onClick={loginClickHandler}
        disabled={isLoading}
      >
        {t('sign_in')}
      </Button>
    </div>
  );
});
