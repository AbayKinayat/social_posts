import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  articles: Article[],
  className?: string,
  isLoading?: boolean,
  view?: 'big' | 'small'
}

export const ArticleList = memo<ArticleListProps>(({
  articles,
  className,
  view = 'small',
}) => {
  const renderItem = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
    />
  );

  return (
    <div className={classNames(classes.ArticleList, className, classes[view])}>
      {
      articles.map(renderItem)
    }
    </div>
  );
});
