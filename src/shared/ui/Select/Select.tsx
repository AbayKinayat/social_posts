import {
  ChangeEvent, memo, useCallback, useMemo,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';

interface SelectOptions {
  value: string,
  content: string
}

interface SelectProps {
  className?: string,
  label?: string,
  options: SelectOptions[],
  value?: string,
  readonly?: boolean,
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = memo<SelectProps>(({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}) => {
  const selectOptions = useMemo(() => options.map((opt) => (
    <option className={classes.option} key={opt.value} value={opt.value}>
      {opt.content}
    </option>
  )), []);

  const onChangeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event);
  }, [onChange]);

  return (
    <div className={classNames(classes.Wrapper, className)}>
      {
        label && (
        <span className={classes.label}>
          {`${label}>`}
          {' '}
        </span>
        )
      }
      <select
        disabled={readonly}
        className={classes.select}
        value={value}
        onChange={onChangeHandler}
      >

        {selectOptions}
      </select>
    </div>
  );
});
