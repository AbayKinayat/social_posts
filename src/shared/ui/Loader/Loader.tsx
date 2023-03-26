import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string
}

export const Loader = memo<LoaderProps>(({ className }) => (
  <div className={classNames('lds-spinner', className)}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
));
