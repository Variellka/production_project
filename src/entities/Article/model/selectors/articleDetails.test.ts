import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';
import { ArticleType } from '../types/article';

describe('articleDetails.test', () => {
    test('getArticleDetailsData test', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
                error: undefined,
                data: {
                    id: '1',
                    title: 'Javascript news',
                    subtitle: 'Что нового в JS за 2022 год?',
                    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                    views: 1022,
                    createdAt: '26.02.2022',
                    type: [ArticleType.IT],
                    blocks: [],
                },
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual({
            id: '1',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            views: 1022,
            createdAt: '26.02.2022',
            type: [ArticleType.IT],
            blocks: [],
        });
    });

    test('getArticleDetailsError test', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
                error: 'error',
                data: {},
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('getArticleDetailsIsLoading test', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
                error: '',
                data: {},
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
});
