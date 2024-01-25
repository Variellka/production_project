import { ArticleDetailedPageAsync } from './ui/ArticleDetailedPage.async';
import { ArticleDetailedCommentsSchema } from './model/types/ArticleDetailedCommentsSchema';
import { getArticleDetailedCommentsError, getArticleDetailedCommentsIsLoading } from './model/selectors/comments';
import { ArticleDetailedRecommendationsSchema } from './model/types/ArticleDetailedRecommendationsSchema';

export {
    ArticleDetailedPageAsync as ArticleDetailedPage,
    ArticleDetailedCommentsSchema,
    getArticleDetailedCommentsError,
    getArticleDetailedCommentsIsLoading,
    ArticleDetailedRecommendationsSchema,
};
