import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import {
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getValidateProfileErrors,
    profileActions,
} from 'features/EditableProfileCard';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const EditableProfileCard = memo(() => {
    const dispatch = useAppDispatch();
    const profileForm = useSelector(getProfileForm);
    const profileError = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);
    const profileReadOnly = useSelector(getProfileReadonly);
    const validateProfileErrors = useSelector(getValidateProfileErrors);

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

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    return (
        <ProfileCard
            data={profileForm}
            error={profileError}
            validateProfileErrors={validateProfileErrors}
            isLoading={profileIsLoading}
            readonly={profileReadOnly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeCountry={onChangeCountry}
            onChangeCurrency={onChangeCurrency}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
        />

    );
});

export default EditableProfileCard;
