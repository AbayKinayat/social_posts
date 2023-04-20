import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './CommentList.module.scss';
import { Comment } from '../../types/comment';
import { CommentCard } from '../CommentCard/ComentCard';

interface CommentListProps {
  className?: string,
  comments: Comment[],
  isLoading?: boolean
}

export const CommentList = memo<CommentListProps>(({ className, comments, isLoading }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.CommentList, className)}>
      {
      comments.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : t('comment_no')
    }
    </div>
  );
});
