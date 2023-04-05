import { ChangeEvent, FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader, Text } from 'shared/ui';
import { Input } from 'shared/ui/Input/Input';
import { TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
  data?: Profile,
  isLoading: boolean
  error?: string
  readonly?: boolean,
  onChangeFirst?: (event: ChangeEvent<HTMLInputElement>) => void,
  onChangeLastname?: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeAge?: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeCountry?: (event: ChangeEvent<HTMLSelectElement>) => void
  onChangeUsername?: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeAvatar?: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeCurrency?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirst,
  onChangeLastname,
  onChangeAge,
  onChangeCountry,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
}) => {
  const { t } = useTranslation('profile');

  const changeFirstHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChangeFirst?.(event);
  }, []);

  const changeLastnameHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChangeLastname?.(event);
  }, []);
  const changeAgeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChangeAge?.(event);
  }, []);
  const changeCountryHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChangeCountry?.(event);
  }, []);
  const changeUsernameHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChangeUsername?.(event);
  }, []);
  const changeAvatarHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChangeAvatar?.(event);
  }, []);
  const changeCurrencyHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChangeCurrency?.(event);
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.error}>
        <Text
          theme={TextTheme.ERROR}
          title="Произошла ошибка при загрузке профиля"
          text="Попробуйте перезагрузить страницу"
        />
      </div>
    );
  }

  return (
    <div className={classNames(classes.ProfileCard, className, {
      [classes.editting]: !readonly,
    })}
    >
      <div className={classes.data}>
        {
          data?.avatar && (
            <div className={classes.avatarWrapper}>
              <Avatar
                src={data.avatar}
                alt="Аватар пользователя"
              />
            </div>
          )
        }
        <Input
          value={data?.first}
          placeholder={t('your_firstname')}
          readonly={readonly}
          onChange={changeFirstHandler}
        />
        <Input
          value={data?.lastname}
          placeholder={t('your_lastname')}
          readonly={readonly}
          onChange={changeLastnameHandler}
        />
        <Input
          value={String(data?.age)}
          placeholder={t('your_lastname')}
          readonly={readonly}
          onChange={changeAgeHandler}
        />
        <Input
          value={data?.username}
          placeholder={t('your_username')}
          readonly={readonly}
          onChange={changeUsernameHandler}
        />
        <Input
          value={data?.avatar}
          placeholder={t('type_your_avatar')}
          readonly={readonly}
          onChange={changeAvatarHandler}
        />

        <CurrencySelect
          value={data?.currency}
          onChange={changeCurrencyHandler}
          readonly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={changeCountryHandler}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
