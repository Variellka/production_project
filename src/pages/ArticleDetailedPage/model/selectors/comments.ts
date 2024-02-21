/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailedCommentsIsLoading = ((state: StateSchema) => state.articleDetailsAdditional?.comments?.isLoading);
export const getArticleDetailedCommentsError = ((state: StateSchema) => state.articleDetailsAdditional?.comments?.error);
