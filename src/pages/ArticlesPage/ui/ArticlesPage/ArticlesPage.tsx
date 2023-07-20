import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticleViewSelect } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlePageView,
} from 'pages/ArticlesPage/model/selectors/articlePageSelectors';
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

  const viewSelectHandler = useCallback((value: 'small' | 'big') => {
    dispatch(articlePageActions.setView(value));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(articlePageActions.initView());
  }, []);

  return (
    <div className={classes.ArticlesPage}>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <ArticleViewSelect
          view={view}
          onSelect={viewSelectHandler}
        />
        <ArticleList
          articles={articles}
          view={view}
        />
      </DynamicModuleLoader>

    </div>
  );
};

export default memo(ArticlesPage);
