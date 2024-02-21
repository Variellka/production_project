import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsAdditionalSchema } from '../types';
import { articleDetailedCommentsReducer } from './articleDetailedCommentsSlice';
import { articlesDetailedRecommendationsReducer } from './articleDetailedRecommendationsSlice';

export const articleDetailsAdditionalReducer = combineReducers<ArticleDetailsAdditionalSchema>({
    comments: articleDetailedCommentsReducer,
    recommendations: articlesDetailedRecommendationsReducer,
});
