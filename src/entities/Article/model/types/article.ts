import { User } from 'entities/User';

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBaseBlock {
    id: string,
    type: ArticleBlockType,
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
    type: ArticleBlockType.CODE,
    code: string
}

export interface ArticleImageBlock extends ArticleBaseBlock {
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string
}

export interface ArticleTextBlock extends ArticleBaseBlock {
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
    IT = 'IT',
    ECONOMICS = 'ECONOMICS',
    SCIENCE = 'SCIENCE'
}

export interface Article {
    id: string,
    user: User,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}

export enum ArticleView {
    LIST = 'LIST',
    TILE = 'TILE'
}

export enum ArticleSortField {
    VIEWS = 'views',
    CREATED = 'createdAt',
    TITLE = 'title'
}
