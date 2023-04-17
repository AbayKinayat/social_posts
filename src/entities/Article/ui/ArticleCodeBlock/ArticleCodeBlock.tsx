import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock as ArticleCodeBlockType } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import classes from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string,
  block: ArticleCodeBlockType
}

export const ArticleCodeBlock = memo<ArticleCodeBlockProps>(({ className, block }) => (
  <div className={classNames(classes.ArticleCodeBlock, className)}>
    <Code text={block.code} />
  </div>
));
