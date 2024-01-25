import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    fetchRecommendationsForArticle,
} from '../servives/fetchRecommendationsForArticle/fetchRecommendationsForArticle';
import { ArticleDetailedRecommendationsSchema } from '../types/ArticleDetailedRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticlesRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsAdditional?.recommendations || recommendationsAdapter.getInitialState(),
);

const articlesDetailedRecommendationsSlice = createSlice({
    name: 'articlesDetailedRecommendations',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailedRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendationsForArticle.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRecommendationsForArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRecommendationsForArticle.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articlesDetailedRecommendationsActions } = articlesDetailedRecommendationsSlice;
export const { reducer: articlesDetailedRecommendationsReducer } = articlesDetailedRecommendationsSlice;
