import { ArticleDetails } from 'entities/Article';
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
import Page from 'shared/ui/Page/Page';
import cls from './ArticleDetailedPage.module.scss';
import {
    getArticleDetailedCommentsError,
    getArticleDetailedCommentsIsLoading,
} from '../model/selectors/comments';
import { articleDetailedCommentsReducer, getArticleComments } from '../model/slice/articleDetailedCommentsSlice';
import { fetchCommentsByArticleId } from '../model/servives/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/servives/addCommentForArticle/addCommentForArticle';

const initialReducers: ReducerList = {
    articleDetailedComments: articleDetailedCommentsReducer,
};

const ArticleDetailedPage = () => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('articles');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailedCommentsIsLoading);
    const commentError = useSelector(getArticleDetailedCommentsError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id!));
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
                <Text mainTitle={t('comments')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsIsLoading} error={commentError} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
