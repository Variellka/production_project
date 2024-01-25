/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailedRecommendationsIsLoading = ((state: StateSchema) => state.articleDetailedRecommendations?.isLoading);
export const getArticleDetailedRecommendationsError = ((state: StateSchema) => state.articleDetailedRecommendations?.error);
