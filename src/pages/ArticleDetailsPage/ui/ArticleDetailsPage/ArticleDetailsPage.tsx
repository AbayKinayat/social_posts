import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article_details');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t('not_found')}</div>;
  }

  return (
    <div className={classes.ArticleDetailsPage}>
      <ArticleDetails
        id={id}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
