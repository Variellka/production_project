import { classNames } from 'shared/lib/classNames/classNames';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string,
    sort: ArticleSortField,
    order: SortOrder,
    onChangeOrder: (newOrder: SortOrder) => void,
    onChangeSort: (newSort: ArticleSortField) => void
}

const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation('articles');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        { value: 'asc', content: `${t('asc')}` }, { value: 'desc', content: `${t('desc')}` },
    ], [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        { value: ArticleSortField.CREATED, content: `${t('created date')}` },
        { value: ArticleSortField.TITLE, content: `${t('title')}` },
        { value: ArticleSortField.VIEWS, content: `${t('views')}` },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                label={`${t('sort by')}:`}
                options={sortOptions}
                value={sort}
                readonly={false}
                className={cls.sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                label={`${t('order by')}:`}
                options={orderOptions}
                value={order}
                readonly={false}
                className={cls.sort}
                onChange={onChangeOrder}
            />
        </div>
    );
};

export default ArticleSortSelector;
