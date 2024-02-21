import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailedCommentsSchema } from '../types/ArticleDetailedCommentsSchema';
import { fetchCommentsByArticleId } from '../servives/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../servives/addCommentForArticle/addCommentForArticle';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsAdditional?.comments || commentsAdapter.getInitialState(),
);

const articleDetailedCommentsSlice = createSlice({
    name: 'articleDetailedComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailedCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchCommentsByArticleId
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })

            // addCommentForArticle
            .addCase(addCommentForArticle.pending, (state) => {
                state.error = undefined;
            })
            .addCase(addCommentForArticle.fulfilled, (state) => {
                state.error = undefined;
            })
            .addCase(addCommentForArticle.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailedCommentsActions } = articleDetailedCommentsSlice;
export const { reducer: articleDetailedCommentsReducer } = articleDetailedCommentsSlice;
