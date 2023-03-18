import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Modal } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(classes.Navbar, className)}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={toggleAuthModal}
      >
        { t('sign_in') }
      </Button>
      <Modal isOpen={authModalOpen} onClose={toggleAuthModal}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Nisi error fuga sit voluptate ex doloremque modi debitis
        excepturi obcaecati? Veniam, sapiente itaque eos dolor
        error voluptatem explicabo ea recusandae cumque!
      </Modal>
    </div>
  );
};
