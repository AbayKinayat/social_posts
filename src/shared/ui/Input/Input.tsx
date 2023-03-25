import {
  memo,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'autofocus'>

interface InputProps extends HTMLInput {
  value?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  autofocus?: boolean
}

export const Input = memo<InputProps>(({
  value,
  onChange,
  className,
  placeholder,
  autofocus,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>();

  const focusHandler = () => {
    setIsFocused(true);
  };

  const blurHandler = () => {
    setIsFocused(false);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    setCaretPosition(event.target.value.length);
  };

  const selectHandler = (event: any) => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef?.current?.focus();
      setIsFocused(true);
    }
  }, [autofocus]);

  return (
    <div className={classNames(classes.InputWrapper, className)}>
      {
        placeholder && (
          <div className={classes.placeholder}>
            {`${placeholder}>`}
          </div>
        )
      }
      <div className={classes.caretWrapper}>
        <input
          ref={inputRef}
          className={classes.input}
          value={value}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onSelect={selectHandler}
          {...otherProps}
        />
        {
          isFocused
          && (
          <span
            className={classes.caret}
            style={{ left: `${9.6 * caretPosition}px` }}
          />
          )
        }
      </div>
    </div>
  );
});
