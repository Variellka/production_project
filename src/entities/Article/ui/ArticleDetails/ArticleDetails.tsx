import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { articleReducer } from '../../model/slice/articleSlice';
import {
    getArticleDetailsIsLoading,
    getArticleDetailsData,
    getArticleDetailsError,
} from '../../model/selectors/articleDetails';

const initialReducers = {
    articleDetails: articleReducer,
};

interface ArticleDetailsProps {
    className?: string,
    id: string
}

const ArticleDetails = memo(({ className, id }:ArticleDetailsProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (<Loader />);
    } else if (error) {
        content = (<Text theme={TextTheme.ERROR} text={t('article was not found')} />);
    } else {
        content = (<>{t('ArticleDetails')}</>);
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames('', {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});

export default ArticleDetails;
