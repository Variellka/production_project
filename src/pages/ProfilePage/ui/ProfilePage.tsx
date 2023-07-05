import {
    ProfileCard,
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const profileData = useSelector(getProfileData);
    const profileError = useSelector(getProfileError);
    const profileIsLoading = useSelector(getProfileIsLoading);
    const profileReadOnly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            {!profileError && !profileIsLoading && <ProfilePageHeader />}
            <ProfileCard
                data={profileData}
                error={profileError}
                isLoading={profileIsLoading}
                readonly={profileReadOnly}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
