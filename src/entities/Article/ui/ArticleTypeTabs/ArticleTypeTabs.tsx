import { ArticleType } from 'entities/Article';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
    className?: string,
    value: ArticleType,
    onChangeType: (type: ArticleType) => void
}

const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('articles');

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            children: t('all'),
        },
        {
            value: ArticleType.IT,
            children: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            children: t('economics'),
        },
        {
            value: ArticleType.SCIENCE,
            children: t('science'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={className}
        />
    );
};

export default ArticleTypeTabs;
