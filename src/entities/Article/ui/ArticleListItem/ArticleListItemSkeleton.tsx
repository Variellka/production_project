import { ArticleView } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string,
    view: ArticleView
}

const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.TILE) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className])}>
                <div className={classNames(cls.card, {}, [cls[view]])}>
                    <div className={cls.imageWrapper}>
                        <Skeleton height="200px" width="200px" />
                    </div>
                    <Skeleton height="25px" width="100px" margin="0 0 15px" />
                    <Skeleton height="25px" width="140px" />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className])}>
            <div className={classNames(cls.card, {}, [cls[view]])}>
                <div className={cls.authorDateWrapper}>
                    <div className={cls.authorWrapper}>
                        <Skeleton height="30px" width="30px" borderRadius="100%" margin="0 10px 0" />
                        <Skeleton height="25px" width="80px" />
                    </div>
                    <Skeleton height="25px" width="80px" />
                </div>
                <Skeleton height="40px" width="250px" margin="0 0 15px" />
                <Skeleton height="25px" width="100px" />
                <div className={cls.imageWrapper}>
                    <Skeleton height="200px" />
                </div>
                <Skeleton height="200px" />
            </div>
        </div>
    );
});

export default ArticleListItemSkeleton;
