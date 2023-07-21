import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
        Profile, void, ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (__, thunkApi) => {
            const { extra, dispatch, rejectWithValue } = thunkApi;
            try {
                const response = await extra.api.get<Profile>('/profile');

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (error: any) {
                console.log(error);
                return rejectWithValue(error.response.data.message);
            }
        },
    );
