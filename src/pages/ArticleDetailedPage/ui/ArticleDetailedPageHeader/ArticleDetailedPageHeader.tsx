import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailedPage/model/selectors/article';
import cls from './ArticleDetailedPageHeader.module.scss';

interface ArticleDetailedPageHeaderProps {
    className?: string
}

const ArticleDetailedPageHeader = (props: ArticleDetailedPageHeaderProps) => {
    const { t } = useTranslation('articles');
    const { className } = props;
    const navigate = useNavigate();
    const articleData = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_detailed}${articleData?.id}/edit`);
    }, [articleData?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailedPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {`< ${t('back to articles')}`}
            </Button>
            {canEdit && (
                <Button onClick={onEditArticle}>
                    {`${t('edit article')} >`}
                </Button>
            )}
        </div>
    );
};

export default ArticleDetailedPageHeader;
