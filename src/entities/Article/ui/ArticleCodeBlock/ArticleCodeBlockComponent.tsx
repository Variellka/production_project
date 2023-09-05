import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleCodeBlockComponent = memo(() => {
    const { t } = useTranslation('articles');
    return (
        <div>
            {t('ArticleCodeBlock')}
        </div>
    );
});

export default ArticleCodeBlockComponent;
