import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo<PageErrorProps>(({ className }) => {
  const pageReload = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }, []);

  return (
    <div className={classNames(classes.PageError, className)}>
      <p>Не предвиденная ошибка</p>
      <Button onClick={pageReload}>
        Обновить страницу
      </Button>
    </div>
  );
});
