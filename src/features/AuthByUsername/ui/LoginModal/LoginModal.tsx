import { FC, Suspense } from 'react';
import { Loader, Modal } from 'shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => (
  <Modal
    className={classes.LoginModal}
    contentClassName={classes.LoginModalContent}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
