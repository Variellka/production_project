import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import DynamicModuleLoader, { ReducerList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
