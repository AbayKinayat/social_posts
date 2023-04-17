import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import classes from './Code.module.scss';
import { Button } from '../Button/Button';

interface CodeProps {
  className?: string,
  text: string
}

export const Code = memo<CodeProps>(({ className, text }) => {
  const copyHandler = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(classes.Code, className)}>
      <Button className={classes.copy} onClick={copyHandler}>
        <CopyIcon className={classes.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
