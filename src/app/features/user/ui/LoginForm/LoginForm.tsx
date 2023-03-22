import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

export const LoginForm: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.LoginForm)}>
      <Input
        className={classes.input}
        type="text"
        placeholder={t('type_username')}
      />
      <Input
        className={classes.input}
        type="text"
        placeholder={t('type_password')}
      />
      <Button className={classes.loginButton} theme={ButtonTheme.OUTLINED}>
        {t('sign_in')}
      </Button>
    </div>
  );
};
