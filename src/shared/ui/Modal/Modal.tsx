import React, { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string,
  children?: ReactNode,
  isOpen: boolean,
  onClose?: () => void
}

export const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose,
}) => {
  function overlayClickHandler() {
    if (onClose) onClose();
  }

  function contentClickHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  return (
    <Portal>
      <div className={classNames(classes.Modal, className, { [classes.opened]: isOpen })}>
        <div className={classes.overlay} onClick={overlayClickHandler}>
          <div className={classes.content} onClick={contentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
