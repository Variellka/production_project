import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import EyeIcon from 'shared/assets/icons/ant-design_eye-outlined.svg';
import Text, { TextSize } from 'shared/ui/Text/Text';
import Icon from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import Avatar from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';
import ArticleTextBlockComponent from '../ArticleTextBlock/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView,
    target?: HTMLAttributeAnchorTarget
}

const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;
    const { t } = useTranslation('articles');

    if (view === ArticleView.TILE) {
        return (
            <AppLink
                target={target}
                to={RoutePath.article_detailed + article.id}
                className={classNames(cls.ArticleListItem, {}, [className])}
            >
                <div className={classNames(cls.card, {}, [cls[view]])}>
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
            </AppLink>
        );
    }

    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className])}>
            <div className={classNames(cls.card, {}, [cls[view]])}>
                <div className={cls.authorDateWrapper}>
                    <div className={cls.authorWrapper}>
                        <Avatar src={article.user.avatar} size={30} />
                        <Text text={article.user.username} />
                    </div>
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text title={article.title} className={cls.title} size={TextSize.L} />
                <Text text={article.type.toString()} className={cls.types} />
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} />
                </div>
                {textBlock && <ArticleTextBlockComponent className={cls.text} block={textBlock} />}
                <div className={cls.infoWrapper}>
                    <AppLink target={target} to={RoutePath.article_detailed + article.id}>
                        <Button>
                            {`${t('read more')} >`}
                        </Button>
                    </AppLink>

                    <div className={cls.iconWrapper}>
                        <Text text={article.views.toString()} />
                        <Icon Svg={EyeIcon} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ArticleListItem;
