import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/getArticlesPage';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string
}

const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onSetView = useCallback((value: ArticleView) => {
        dispatch(articlesPageActions.setView(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.filtersWrapper}>
                <Select
                    label={`${t('sort by')}:`}
                    options={[{ value: 'asc', content: 'asc' }, { value: 'desc', content: 'desc' }]}
                    readonly={false}
                    className={cls.sort}
                />
                <ArticleViewSelector
                    onSetView={onSetView}
                    currentView={view}
                />
            </div>

            <Input placeholderInternal={`${t('search')}...`} />
        </div>
    );
};

export default ArticlesPageFilters;
