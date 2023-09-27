import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView
}

const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.TILE,
    } = props;

    const { t } = useTranslation('articles');

    const renderArticles = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.ArticleTile} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length && articles.map(renderArticles)}
        </div>
    );
};

export default ArticleList;
