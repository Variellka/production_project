import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article';
import { getArticlesPageInited } from '../../selectors/getArticlesPage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const initArticlesPage = createAsyncThunk<
void, URLSearchParams, ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                searchParams.forEach((value, key) => {
                    // eslint-disable-next-line default-case
                    switch (key) {
                    case 'order':
                        dispatch(articlesPageActions.setOrder(value as SortOrder));
                        break;
                    case 'sort':
                        dispatch(articlesPageActions.setSort(value as ArticleSortField));
                        break;
                    case 'search':
                        dispatch(articlesPageActions.setSearch(value as string));
                        break;
                    }
                });

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticles({}));
            }
        },
    );
