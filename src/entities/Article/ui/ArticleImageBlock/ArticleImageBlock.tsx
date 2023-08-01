import { useTranslation } from 'react-i18next';

const ArticleImageBlock = () => {
    const { t } = useTranslation('articles');
    return (
        <div>
            {t('ArticleImageBlock')}
        </div>
    );
};

export default ArticleImageBlock;
