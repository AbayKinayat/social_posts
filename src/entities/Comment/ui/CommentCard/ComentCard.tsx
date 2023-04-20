import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import classes from './CommentCard.module.scss';
import { Comment } from '../../types/comment';

interface CommentCardProps {
  className?: string,
  comment: Comment,
  isLoading?: boolean
}

export const CommentCard = memo<CommentCardProps>(({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <div className={classNames(classes.CommentCard, className)}>
        <div className={classes.header}>
          <Skeleton width="30px" height="30px" border="50%" />
          <Skeleton height="20px" width="100px" />
        </div>
        <Skeleton width="100%" height="20px" />
      </div>
    );
  }

  return (
    <div className={classNames(classes.CommentCard, className)}>
      <div className={classes.header}>
        {comment.user.avatar && (
        <Avatar
          src={comment.user.avatar}
          alt={comment.user.username}
          size={20}
        />
        )}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
});
