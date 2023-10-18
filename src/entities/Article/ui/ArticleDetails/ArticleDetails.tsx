import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import Text, { TextSize, TextTheme } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import Avatar from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/ant-design_eye-outlined.svg';
import CalendarIcon from 'shared/assets/icons/clarity_date-line.svg';
import Icon from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { articleReducer } from '../../model/slice/articleSlice';
import {
    getArticleDetailsIsLoading,
    getArticleDetailsData,
    getArticleDetailsError,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import ArticleTextBlockComponent from '../ArticleTextBlock/ArticleTextBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlock/ArticleImageBlockComponent';
import ArticleCodeBlockComponent from '../ArticleCodeBlock/ArticleCodeBlockComponent';

const initialReducers = {
    articleDetails: articleReducer,
};

interface ArticleDetailsProps {
    className?: string,
    id: string | undefined
}

const ArticleDetails = memo(({ className, id }:ArticleDetailsProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id!));
    }, [id]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} className={cls.ArticleBlock} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block} className={cls.ArticleBlock} />;
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.ArticleBlock} />;
        default: return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width="200px" height="200px" borderRadius="50%" />
                <Skeleton className={cls.title} width="400px" height="20px" />
                <Skeleton className={cls.title} width="300px" height="20px" />
                <Skeleton className={cls.text} width="100%" height="100vh" />
            </>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={t('an error occurred while loading the article')}
                text={t('try reload page or check if the link is correct')}
            />
        );
    } else {
        content = (
            <>
                <Avatar src={article?.img} className={cls.avatar} size={200} />
                <Text
                    mainTitle={article?.title}
                    title={article?.subtitle}
                    size={TextSize.L}
                    className={cls.title}
                />
                <div className={cls.articleInfoWrapper}>
                    <div className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} />
                        <Text text={article?.views.toString()} size={TextSize.M} />
                    </div>
                    <div className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} size={TextSize.M} />
                    </div>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});

export default ArticleDetails;
