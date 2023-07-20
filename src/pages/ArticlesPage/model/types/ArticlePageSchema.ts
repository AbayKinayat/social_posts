import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading: boolean,
  error: string;

  view: 'small' | 'big'
}
