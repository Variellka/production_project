import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileType } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
        ProfileType, void, ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (__, thunkApi) => {
            const { extra, dispatch, rejectWithValue } = thunkApi;
            try {
                const response = await extra.api.get<ProfileType>('/profile');

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
