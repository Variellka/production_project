import {
    ArticleSortField, ArticleSortSelector, ArticleType, ArticleTypeTabs, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPageFilters.module.scss';
import {
    getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView,
} from '../../model/selectors/getArticlesPage';

interface ArticlesPageFiltersProps {
    className?: string
}

const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onSetView = useCallback((value: ArticleView) => {
        dispatch(articlesPageActions.setView(value));
    }, [dispatch]);

    const onChangeOrder = useCallback((value:SortOrder) => {
        dispatch(articlesPageActions.setOrder(value));
        fetchData();
    }, [fetchData, dispatch]);

    const onChangeSort = useCallback((value: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(value));
        fetchData();
    }, [fetchData, dispatch]);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(articlesPageActions.setSearch(value));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.filtersWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    onSetView={onSetView}
                    currentView={view}
                />
            </div>
            <Input
                placeholderInternal={`${t('search')}...`}
                onChange={onChangeSearch}
                value={search}
            />
            <ArticleTypeTabs value={type} onChangeType={onChangeType} />
        </div>
    );
};

export default ArticlesPageFilters;
