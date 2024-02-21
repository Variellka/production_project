import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticles } from '../fetchArticles/fetchArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: false,
                hasMore: true,
                page: 1,
                limit: 4,
                ids: [],
                entities: {},
                _inited: true,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                type: ArticleType.ALL,
            },
        });
        await thunk.callThunk();

        // pending + fulfilled + 2x dispatch
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticles).toBeCalled();
    });
    test('not called when isLoading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: true,
                hasMore: true,
                page: 1,
                limit: 4,
                ids: [],
                entities: {},
                _inited: true,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                type: ArticleType.ALL,
            },
        });
        await thunk.callThunk();

        // pending + fulfilled
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticles).not.toBeCalled();
    });
    test('not called when hasMore === false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: false,
                hasMore: false,
                page: 1,
                limit: 4,
                ids: [],
                entities: {},
                _inited: true,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                type: ArticleType.ALL,
            },
        });
        await thunk.callThunk();

        // pending + fulfilled
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticles).not.toBeCalled();
    });
});
