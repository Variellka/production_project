import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Text from 'shared/ui/Text/Text';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Page from 'widgets/Page/Page';
import cls from './ArticleDetailedPage.module.scss';
import {
    getArticleDetailedCommentsError,
    getArticleDetailedCommentsIsLoading,
} from '../model/selectors/comments';
import { articleDetailedCommentsReducer, getArticleComments } from '../model/slice/articleDetailedCommentsSlice';
import { fetchCommentsByArticleId } from '../model/servives/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/servives/addCommentForArticle/addCommentForArticle';
import {
    articlesDetailedRecommendationsReducer,
    getArticlesRecommendations,
} from '../model/slice/articleDetailedRecommendationsSlice';
import {
    fetchRecommendationsForArticle,
} from '../model/servives/fetchRecommendationsForArticle/fetchRecommendationsForArticle';
import {
    getArticleDetailedRecommendationsError,
    getArticleDetailedRecommendationsIsLoading,
} from '../model/selectors/recommendations';

const initialReducers: ReducerList = {
    articleDetailedComments: articleDetailedCommentsReducer,
    articleDetailedRecommendations: articlesDetailedRecommendationsReducer,
};

const ArticleDetailedPage = () => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('articles');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailedCommentsIsLoading);
    const commentError = useSelector(getArticleDetailedCommentsError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
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

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page>
                <Button onClick={onBackToList}>
                    {`< ${t('back to articles')}`}
                </Button>
                <ArticleDetails id={id} />
                <Text mainTitle={t('latest articles')} className={cls.commentTitle} />
                <ArticleList
                    articles={recommendations}
                    view={ArticleView.TILE}
                    className={cls.ArticleRecommendations}
                    isLoading={recommendationsIsLoading}
                    error={recommendationsError}
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
