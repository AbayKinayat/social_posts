import React, {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string,
  contentClassName?: string,
  children?: ReactNode,
  isOpen: boolean,
  lazy?: boolean,
  onClose?: () => void,
}

export const Modal: FC<ModalProps> = ({
  className,
  contentClassName,
  children,
  isOpen,
  lazy,
  onClose,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  function overlayClickHandler() {
    if (onClose) onClose();
  }

  function contentClickHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  useEffect(() => {
    if (isOpen) { setIsMounted(true); }
  }, [isOpen]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(classes.Modal, className, { [classes.opened]: isOpen })}>
        <div className={classes.overlay} onClick={overlayClickHandler}>
          <div
            className={
            classNames(classes.content, contentClassName)
            }
            onClick={contentClickHandler}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
