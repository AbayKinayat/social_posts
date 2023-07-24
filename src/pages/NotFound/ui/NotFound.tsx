import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import classes from './NotFound.module.scss';

export const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <Page className={classes.NotFound}>
      {t('page_not-found')}
    </Page>
  );
};
