import { Currency } from 'entities/Currency/model/types/currency';
import { ChangeEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

const currencyOptions = [
  { content: Currency.RUB, value: Currency.RUB },
  { content: Currency.EUR, value: Currency.EUR },
  { content: Currency.USD, value: Currency.USD },
];

interface CurrencySelectProps {
  className?: string,
  value?: string,
  readonly?: boolean,
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const CurrencySelect = memo<CurrencySelectProps>(({
  className, onChange, value, readonly,
}) => {
  const { t } = useTranslation();

  const changeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event);
  }, [onChange]);

  return (
    <Select
      label={t('select_currency')}
      className={className}
      value={value}
      onChange={changeHandler}
      options={currencyOptions}
      readonly={readonly}
    />
  );
});
