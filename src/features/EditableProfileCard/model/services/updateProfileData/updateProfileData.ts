import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData!);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile${profileId}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error: any) {
            console.log(error);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
