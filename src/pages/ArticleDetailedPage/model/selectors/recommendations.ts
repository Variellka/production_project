/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailedRecommendationsIsLoading = ((state: StateSchema) => state.articleDetailsAdditional?.recommendations?.isLoading);
export const getArticleDetailedRecommendationsError = ((state: StateSchema) => state.articleDetailsAdditional?.recommendations?.error);
