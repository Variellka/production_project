import { Article, ArticleView } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import EyeIcon from 'shared/assets/icons/ant-design_eye-outlined.svg';
import Text from 'shared/ui/Text/Text';
import Icon from 'shared/ui/Icon/Icon';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView
}

const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation('articles');

    if (view === ArticleView.TILE) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <div className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <img src={article.img} alt={article.title} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Text text={article.type.toString()} className={cls.types} />
                        <div className={cls.iconWrapper}>
                            <Text text={article.views.toString()} />
                            <Icon Svg={EyeIcon} />
                        </div>
                    </div>
                    <Text text={article.title} className={cls.title} />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            {article?.title}
        </div>
    );
};

export default ArticleListItem;
