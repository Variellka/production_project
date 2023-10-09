import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Page from 'shared/ui/Page/Page';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../model/selectors/getArticlesPage';

const initialReducers = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initView());
        dispatch(fetchArticles({ page: 1 }));
    }, [dispatch]);

    const onLoadMore = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticles({ page: page + 1 }));
        }
    }, [dispatch, hasMore, isLoading, page]);

    const onSetView = useCallback((value: ArticleView) => {
        dispatch(articlesPageActions.setView(value));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page onScrollEnds={onLoadMore}>
                <ArticleViewSelector
                    onSetView={onSetView}
                    currentView={view}
                />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    error={error}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
