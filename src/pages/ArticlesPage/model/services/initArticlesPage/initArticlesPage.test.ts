import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticles } from '../fetchArticles/fetchArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage.test', () => {
    test('first init', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                hasMore: true,
                page: 1,
                limit: 4,
                ids: [],
                entities: {},
                _inited: false,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                type: ArticleType.ALL,
            },
        });
        const urlParams = new URLSearchParams('');
        await thunk.callThunk(urlParams);

        // pending + fulfilled + 2x dispatch
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticles).toBeCalled();
    });
    test('second init', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
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
        const urlParams = new URLSearchParams('');
        await thunk.callThunk(urlParams);

        // pending + fulfilled
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticles).not.toBeCalled();
    });
});
