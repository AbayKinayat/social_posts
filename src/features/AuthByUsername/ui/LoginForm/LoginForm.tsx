import {
  ChangeEvent, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from
  'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from
  'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from
  'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from
  'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

const initialReducers = {
  loginForm: loginReducer,
};

interface LoginFormProps {
  onSuccess?: () => void
}

const LoginForm = memo<LoginFormProps>(({ onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginLoading);

  const usernameChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(e.target.value));
  }, [dispatch]);

  const passwordChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(e.target.value));
  }, [dispatch]);

  const loginClickHandler = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
