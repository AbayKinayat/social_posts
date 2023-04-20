/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading || false;
