import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

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
        isLoading = true,
        view = ArticleView.TILE,
    } = props;

    const { t } = useTranslation('articles');

    const renderArticles = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.ArticleTile} key={article.id} />
    );

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {new Array(view === ArticleView.TILE ? 9 : 2).fill(0).map((__, index) => (
                    <ArticleListItemSkeleton view={view} key={index} />
                ))}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length && articles.map(renderArticles)}
        </div>
    );
};

export default ArticleList;
