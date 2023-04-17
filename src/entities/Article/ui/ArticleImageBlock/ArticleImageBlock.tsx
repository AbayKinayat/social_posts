import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock as ArticleImageBlockType } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui';
import classes from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string,
  block: ArticleImageBlockType
}

export const ArticleImageBlock = memo<ArticleImageBlockProps>(({ className, block }) => (
  <div className={classNames(classes.ArticleImageBlock, className)}>
    <img src={block.src} alt={block.title} className={classes.img} />
    {
      block.title && <Text title={block.title} />
    }
  </div>
));
