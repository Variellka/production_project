import {
    ProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const profileForm = useSelector(getProfileForm);
    const profileError = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);
    const profileReadOnly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: number) => {
        dispatch(profileActions.updateProfile({ age: value }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    // const onChangeCountry = useCallback((value: string) => {
    //     dispatch(profileActions.updateProfile({ country: value }));
    // }, [dispatch]);

    const onChangeCurrency = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ currency: value as Currency }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ProfilePageHeader error={profileError} />
            <ProfileCard
                data={profileForm}
                error={profileError}
                isLoading={profileIsLoading}
                readonly={profileReadOnly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                // onChangeCountry={onChangeCountry}
                onChangeCurrency={onChangeCurrency}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
