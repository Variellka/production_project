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
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const EditableProfileCard = memo(() => {
    const dispatch = useAppDispatch();
    const profileForm = useSelector(getProfileForm);
    const profileError = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);
    const profileReadOnly = useSelector(getProfileReadonly);
    const validateProfileErrors = useSelector(getValidateProfileErrors);
    const { id } = useParams<{id: string}>();

    const onChangeFirstname = useCallback((value: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, firstname: value }));
        }
    }, [dispatch, id]);

    const onChangeLastname = useCallback((value: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, lastname: value }));
        }
    }, [dispatch, id]);

    const onChangeAge = useCallback((value: number) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, age: value }));
        }
    }, [dispatch, id]);

    const onChangeCity = useCallback((value: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, city: value }));
        }
    }, [dispatch, id]);

    const onChangeCountry = useCallback((country: Country) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, country }));
        }
    }, [dispatch, id]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, currency }));
        }
    }, [dispatch, id]);

    const onChangeUsername = useCallback((value: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, username: value }));
        }
    }, [dispatch, id]);

    const onChangeAvatar = useCallback((value: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, avatar: value }));
        }
    }, [dispatch, id]);

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
