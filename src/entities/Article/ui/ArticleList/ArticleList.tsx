import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    error?: string,
    view?: ArticleView
}

const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        error,
        view = ArticleView.LIST,
    } = props;

    const { t } = useTranslation('articles');

    const renderArticles = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.ArticleTile} key={article.id} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticles) : null}
            {isLoading && new Array(view === ArticleView.TILE ? 9 : 2).fill(0).map((__, index) => (
                <ArticleListItemSkeleton view={view} key={index} />
            ))}
            {error && <Text title={t('articles are not found')} theme={TextTheme.ERROR} />}
        </div>
    );
};

export default ArticleList;
