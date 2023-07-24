import { NavigateFunction } from 'react-router-dom';
import type {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import type{ CounterSchema } from 'entities/Counter';
import type { ProfileSchema } from 'entities/Profile';
import type { UserSchema } from 'entities/User';
import type { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlePageSchema } from 'pages/ArticlesPage';
import { UiSchema } from 'features/UI';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // Асинхронные редюсеры
  loginForm?: LoginSchema,
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema,
  articleDetailsComments?: ArticleDetailsCommentsSchema,
  addCommentForm?: AddCommentFormSchema,
  articlePage?: ArticlePageSchema
  ui: UiSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap(): ReducersMapObject<StateSchema>,
  reduce(state: StateSchema, action: AnyAction): CombinedState<StateSchema>,
  add(key: StateSchemaKey, reducer: Reducer): void,
  remove(key: StateSchemaKey): void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg
  state: StateSchema
}
