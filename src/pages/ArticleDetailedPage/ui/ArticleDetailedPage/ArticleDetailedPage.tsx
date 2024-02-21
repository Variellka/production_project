import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import Text from 'shared/ui/Text/Text';
import Page from 'widgets/Page/Page';
import {
    getArticleDetailedCommentsError,
    getArticleDetailedCommentsIsLoading,
} from '../../model/selectors/comments';
import {
    getArticleDetailedRecommendationsError,
    getArticleDetailedRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/servives/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/servives/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    fetchRecommendationsForArticle,
} from '../../model/servives/fetchRecommendationsForArticle/fetchRecommendationsForArticle';
import { articleDetailsAdditionalReducer } from '../../model/slice';
import { getArticleComments } from '../../model/slice/articleDetailedCommentsSlice';
import { getArticlesRecommendations } from '../../model/slice/articleDetailedRecommendationsSlice';
import cls from './ArticleDetailedPage.module.scss';
import ArticleDetailedPageHeader from '../ArticleDetailedPageHeader/ArticleDetailedPageHeader';

const initialReducers: ReducerList = {
    articleDetailsAdditional: articleDetailsAdditionalReducer,
};

const ArticleDetailedPage = () => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('articles');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailedCommentsIsLoading);
    const commentError = useSelector(getArticleDetailedCommentsError);
    const dispatch = useAppDispatch();

    const recommendations = useSelector(getArticlesRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleDetailedRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleDetailedRecommendationsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id!));
        dispatch(fetchRecommendationsForArticle());
    }, [id]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page>
                <ArticleDetailedPageHeader />
                <ArticleDetails id={id} />
                <Text mainTitle={t('latest articles')} className={cls.commentTitle} />
                <ArticleList
                    articles={recommendations}
                    view={ArticleView.TILE}
                    className={cls.ArticleRecommendations}
                    isLoading={recommendationsIsLoading}
                    error={recommendationsError}
                    target="blank"
                />
                <Text mainTitle={t('comments')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                    error={commentError}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
