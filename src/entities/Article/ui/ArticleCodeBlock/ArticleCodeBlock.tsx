import { useTranslation } from 'react-i18next';

const ArticleCodeBlock = () => {
    const { t } = useTranslation('articles');
    return (
        <div>
            {t('ArticleCodeBlock')}
        </div>
    );
};

export default ArticleCodeBlock;
