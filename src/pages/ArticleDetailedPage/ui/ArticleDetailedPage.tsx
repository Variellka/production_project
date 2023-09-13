/* eslint-disable max-len */
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/Text/Text';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticleDetailedPage.module.scss';
import { getArticleDetailedCommentsError, getArticleDetailedCommentsIsLoading } from '../model/selectors/comments';
import { articleDetailedCommentsReducer, getArticleComments } from '../model/slice/articleDetailedCommentsSlice';
import { fetchCommentsByArticleId } from '../model/servives/fetchCommentsByArticleId';

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

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id!));
    }, [id]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div>
                <ArticleDetails id={id} />
                <Text mainTitle={t('comments')} className={cls.commentTitle} />
                <CommentList comments={comments} isLoading={commentsIsLoading} error={commentError} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
