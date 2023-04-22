import {
  Suspense, memo, useCallback, useEffect,
} from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/ui';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { getArticleDetailsCommentsLoading } from '../../model/selectors/comments';
import { fetchArticleComments } from '../../model/services/fetchArticleComments';
import { sendArticleComment } from '../../model/services/sendArticleComment/sendArticleComment';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsComments';
import classes from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article_details');
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading);

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t('not_found')}</div>;
  }

  const sendFormHandler = useCallback((text: string) => {
    dispatch(sendArticleComment(text));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticleComments(id));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classes.ArticleDetailsPage}>
        <ArticleDetails
          id={id}
        />
        <Text
          title={t('comments')}
        />
        <Suspense fallback="loading">
          <AddCommentForm
            onSubmit={sendFormHandler}
          />
        </Suspense>
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
