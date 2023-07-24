import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('about_us')}
    </Page>
  );
};

export default AboutPage;
