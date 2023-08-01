import { useTranslation } from 'react-i18next';

const ArticleTextBlock = () => {
    const { t } = useTranslation('articles');
    return (
        <div>
            {t('ArticleTextBlock')}
        </div>
    );
};

export default ArticleTextBlock;
