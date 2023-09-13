import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailedCommentsIsLoading = ((state: StateSchema) => state.articleDetailedComments?.isLoading);
export const getArticleDetailedCommentsError = ((state: StateSchema) => state.articleDetailedComments?.error);
