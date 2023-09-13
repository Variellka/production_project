import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailedCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean,
    error?: string,
    ids: string[]
}
