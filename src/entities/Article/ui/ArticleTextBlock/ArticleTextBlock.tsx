import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui';
import { ArticleTextBlock as ArticleTextBlockType } from 'entities/Article/model/types/article';
import classes from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string,
  block: ArticleTextBlockType
}

export const ArticleTextBlock = memo<ArticleTextBlockProps>(({ className, block }) => (
  <div className={classNames(classes.ArticleTextBlock, className)}>
    {
      block.title && (
      <Text
        title={block.title}
        className={classes.title}
      />
      )
    }
    <div className={classes.paragraphs}>
      {
      block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          text={paragraph}
          className={classes.paragraph}
        />
      ))
    }
    </div>
  </div>
));
