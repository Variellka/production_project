import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Text, { TextTheme } from 'shared/ui/Text/Text';

const ArticleDetailedPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();

    return (
        <div><ArticleDetails id={id} /></div>
    );
};

export default memo(ArticleDetailedPage);
