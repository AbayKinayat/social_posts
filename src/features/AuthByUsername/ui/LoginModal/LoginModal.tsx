import { FC } from 'react';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
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
    <LoginForm />
  </Modal>
);
