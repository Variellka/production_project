import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
} from '../../selectors/getArticlesPage';

interface fetchArticlesProps {
    replace?: boolean
}

export const fetchArticles = createAsyncThunk<
Article[], fetchArticlesProps, ThunkConfig<string>
    >(
        'articlesPage/fetchArticles',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getArticlesPageLimit(getState());
            const page = getArticlesPageNum(getState());
            const order = getArticlesPageOrder(getState());
            const sort = getArticlesPageSort(getState());
            const search = getArticlesPageSearch(getState());

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
                        _sort: sort,
                        _order: order,
                        q: search,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
