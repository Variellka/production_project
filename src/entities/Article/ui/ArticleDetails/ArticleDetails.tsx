import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { articleReducer } from '../../model/slice/articleSlice';
import {
    getArticleDetailsIsLoading,
    getArticleDetailsData,
    getArticleDetailsError,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

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
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    useEffect(() => {
        if (id) dispatch(fetchArticleById(id));
    }, [dispatch, id]);

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
                text={t('try to reload page or check if the link is correct')}
            />
        );
    } else {
        content = (<>{t('ArticleDetails')}</>);
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
