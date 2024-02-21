import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCreatePageProps {
    className?: string
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
    const { t } = useTranslation('articles');
    const { className } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {t('articleCreatePage')}
        </div>
    );
});

export default ArticleCreatePage;
