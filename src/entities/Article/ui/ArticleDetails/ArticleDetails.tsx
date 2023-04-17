import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducersList }
  from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetails';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { fetchArticleDetail } from 'entities/Article/services/fetchArticleDetail';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from 'entities/Article/model/selectors/articleDetailsSelectors';
import { Text } from 'shared/ui';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import classes from './ArticleDetails.module.scss';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';

interface ArticleDetailsProps {
  id: string,
  className?: string,
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo<ArticleDetailsProps>(({ id, className }) => {
  const dispatch = useAppDispatch();

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} block={block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} block={block} />;
      default: return null;
    }
  }, []);

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsLoading);
  // const isLoading = true;
  const error = useSelector(getArticleDetailsError);

  let content;

  if (isLoading) {
    content = (
      <div className={classes.loading}>
        <Skeleton className={classes.avatar} width="200px" height="200px" />
        <Skeleton
          className={classes.title}
          width="300px"
          height="32px"
        />
        <Skeleton
          width="600px"
          height="24px"
        />
        <Skeleton
          width="100%"
          height="200px"
        />
        <Skeleton
          width="100%"
          height="200px"
        />
      </div>
    );
  }

  if (error) {
    content = (
      <Text
        text="Произошла ошибка при загрузки статьи"
      />
    );
  }

  if (article) {
    content = (
      <div className={classNames(classes.ArticleDetails, className)}>
        <Avatar
          className={classes.avatar}
          src={article.img}
          alt="Аватар пользователя"
          size={200}
        />
        <Text
          title={article.title}
          text={article.subtitle}
          size={TextSize.L}
        />
        <div className={classes.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article.views)} />
        </div>
        <div className={classes.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={String(article.createdAt)} />
        </div>
        {
          article.blocks.map(renderBlock)
        }
      </div>
    );
  }

  useEffect(() => {
    dispatch(fetchArticleDetail(id));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
