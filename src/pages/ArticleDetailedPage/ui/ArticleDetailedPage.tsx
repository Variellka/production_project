import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailedPage = () => {
    const { t } = useTranslation('articles');
    return (
        <div>{t('article detailed page')}</div>
    );
};

export default memo(ArticleDetailedPage);
