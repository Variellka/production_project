import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import { Article } from './model/types/article';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './model/selectors/articleDetails';

export {
    ArticleDetails, Article, ArticleDetailsSchema,
    getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,
};
