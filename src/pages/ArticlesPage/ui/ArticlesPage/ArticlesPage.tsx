import {
  memo, useCallback, useEffect,
} from 'react';
import { ArticleList, ArticleViewSelect } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import {
  getArticlePageHasMore,
  getArticlePageInited,
  getArticlePageLoading,
  getArticlePagePage,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import classes from './ArticlesPage.module.scss';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { fetchArticles } from '../../model/services/fetchArticles';

const reducers: ReducersList = {
  articlePage: articlePageReducer,

};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlePageView);
  const page = useSelector(getArticlePagePage);
  const hasMore = useSelector(getArticlePageHasMore);
  const loading = useSelector(getArticlePageLoading);
  const inited = useSelector(getArticlePageInited);

  const viewSelectHandler = useCallback((value: 'small' | 'big') => {
    dispatch(articlePageActions.setView(value));
  }, [dispatch]);

  const fetchNextArticles = useCallback(() => {
    if (hasMore && !loading) {
      dispatch(fetchArticles({ page: page + 1 }));
      dispatch(articlePageActions.setPage(page + 1));
    }
  }, [page, hasMore, loading]);

  useEffect(() => {
    if (!inited) {
      dispatch(articlePageActions.initView());
    }
  }, []);

  return (
    <Page className={classes.ArticlesPage} onScrollEnd={fetchNextArticles}>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <ArticleViewSelect
          view={view}
          onSelect={viewSelectHandler}
        />
        <ArticleList
          articles={articles}
          view={view}
        />
      </DynamicModuleLoader>
    </Page>
  );
};

export default memo(ArticlesPage);
