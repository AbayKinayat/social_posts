import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');

  return (
    <div className={classes.ArticlesPage}>
      {t('article_page')}
    </div>
  );
};

export default memo(ArticlesPage);
