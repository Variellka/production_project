import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Text, { TextTheme } from 'shared/ui/Text/Text';

const ArticleDetailedPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div>
                <Text theme={TextTheme.ERROR} text={t('article is not found')} />
            </div>
        );
    }
    return (
        <div><ArticleDetails id={id} /></div>
    );
};

export default memo(ArticleDetailedPage);
