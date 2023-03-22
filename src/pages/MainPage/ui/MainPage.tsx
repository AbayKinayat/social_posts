import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage: FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {t('main_page')}

      <Input
        placeholder="Login"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default MainPage;
