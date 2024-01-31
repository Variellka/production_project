import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { t } = useTranslation('articles');
    const { className } = props;
    const { id } = useParams();

    return (
        <div className={classNames('', {}, [className])}>
            {t('articleEditPage')}
            {id}
        </div>
    );
});

export default ArticleEditPage;
