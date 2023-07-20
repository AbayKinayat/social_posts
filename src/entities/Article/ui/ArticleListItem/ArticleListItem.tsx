import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Text } from 'shared/ui';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route';
import classes from './ArticleListItem.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock as ArticleTextBlockType } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

interface ArticleListItemProps {
  className?: string
  article: Article,
  view: 'big' | 'small',
}

export const ArticleListItem = memo<ArticleListItemProps>(({
  className,
  article,
  view,
}) => {
  const navigate = useNavigate();

  const type = <Text text={article.type?.join(',')} className={classes.type} />;
  const views = (
    <>
      <Text text={String(article.views)} className={classes.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const articleOpenHandler = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article.id}`);
  }, []);

  if (view === 'big') {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlockType;
    return (
      <div className={classNames(classes.ArticleListItem, className, classes[view])}>
        <Card className={classes.card}>
          <div className={classes.header}>
            <div className={classes.headerInner}>
              <div className={classes.userInfo}>
                {
                  article.user.avatar && <Avatar size={30} src={article.user.avatar} alt={article.user.username} />
                }
                {article.user.username}
              </div>
              <div className={classes.date}>
                {article.createdAt}
              </div>
            </div>
            <div className={classes.title}>
              {article.title}
            </div>
            {type}
          </div>
          <img className={classes.img} src={article.img} alt={article.title} />
          {
            textBlock && <ArticleTextBlock className={classes.textBlock} block={textBlock} />
          }
          <div className={classes.footer}>
            <Button theme={ButtonTheme.OUTLINED} onClick={articleOpenHandler}>
              Читать далее
            </Button>
            <div className={classes.views}>
              {views}
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(classes.ArticleListItem, classes[view], className)}>
      <Card className={classes.card} onClick={articleOpenHandler}>
        <div className={classes.imageWrapper}>
          <img className={classes.img} alt={article.title} />
          <div className={classes.date}>
            {article.createdAt}
          </div>
        </div>
        <div className={classes.infoWrapper}>
          {type}
          {views}
        </div>
        <Text text={article.title} className={classes.title} />
      </Card>
    </div>
  );
});
