import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import {
    EditableProfileCard, fetchProfileData, getProfileError, profileReducer,
} from 'features/EditableProfileCard';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const profileError = useSelector(getProfileError);
    const isAuth = useSelector(getUserAuthData);

    useEffect(() => {
        if (isAuth && __PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch, isAuth]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ProfilePageHeader error={profileError} />
            <EditableProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
