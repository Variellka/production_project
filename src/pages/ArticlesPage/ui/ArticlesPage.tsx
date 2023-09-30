import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
    const { t } = useTranslation('articles');
    return (
        <div>
            <ArticleList articles={[]} />
        </div>
    );
};

export default memo(ArticlesPage);
