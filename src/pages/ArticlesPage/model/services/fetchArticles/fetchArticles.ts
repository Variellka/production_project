import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageHasMore, getArticlesPageLimit, getArticlesPageNum } from '../../selectors/getArticlesPage';

export const fetchArticles = createAsyncThunk<
Article[], void, ThunkConfig<string>
    >(
        'articlesPage/fetchArticles',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getArticlesPageLimit(getState());
            const page = getArticlesPageNum(getState());

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
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
