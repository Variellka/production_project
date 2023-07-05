import {
    ProfileCard, fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const profileData = useSelector(getProfileData);
    const profileError = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ProfileCard data={profileData} error={profileError} isLoading={profileIsLoading} />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
