import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const closeAuthModal = useCallback(() => {
    setAuthModalOpen(false);
  }, []);

  const openAuthModal = useCallback(() => {
    setAuthModalOpen(true);
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(classes.Navbar, className)}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={logout}
        >
          { t('logout') }
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.Navbar, className)}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={openAuthModal}
      >
        { t('sign_in') }
      </Button>
      <LoginModal isOpen={authModalOpen} onClose={closeAuthModal}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Nisi error fuga sit voluptate ex doloremque modi debitis
        excepturi obcaecati? Veniam, sapiente itaque eos dolor
        error voluptatem explicabo ea recusandae cumque!
      </LoginModal>
    </div>
  );
};
