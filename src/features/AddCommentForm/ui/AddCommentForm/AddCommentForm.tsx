import {
  type ChangeEvent,
  type FormEvent,
  memo,
  useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import classes from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSubmit?: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo<AddCommentFormProps>(({ className, onSubmit }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const addCommentFormText = useSelector(getAddCommentFormText);

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addCommentFormActions.setText(event.target.value));
  }, [dispatch]);

  const sendCommentHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(addCommentFormText);
  }, [addCommentFormText]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <form
        className={classNames(classes.AddCommentForm, className)}
        onSubmit={sendCommentHandler}
      >
        <Input
          className={classes.input}
          placeholder={t('input_comment')}
          value={addCommentFormText}
          onChange={changeHandler}
        />
        <Button
          theme={ButtonTheme.OUTLINED}
          type="submit"
        >
          { t('send') }
        </Button>
      </form>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
