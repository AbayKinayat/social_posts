import { Country } from 'entities/Country/model/types/country';
import React, { ChangeEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
  className?: string,
  value?: string,
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void,
  readonly?: boolean,
}

const countryOptions = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraina, content: Country.Ukraina },
];

export const CountrySelect = memo<CountrySelectProps>(({
  readonly, className, value, onChange,
}) => {
  const { t } = useTranslation();

  const changeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event);
  }, []);

  return (
    <Select
      className={className}
      label={t('select_couuntry')}
      options={countryOptions}
      value={value}
      onChange={changeHandler}
      readonly={readonly}
    />
  );
});
