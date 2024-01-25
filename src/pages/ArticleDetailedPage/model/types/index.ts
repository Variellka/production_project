import { ArticleDetailedCommentsSchema } from './ArticleDetailedCommentsSchema';
import { ArticleDetailedRecommendationsSchema } from './ArticleDetailedRecommendationsSchema';

export interface ArticleDetailsAdditionalSchema {
    comments: ArticleDetailedCommentsSchema,
    recommendations: ArticleDetailedRecommendationsSchema
}
