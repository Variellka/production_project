import { memo } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import {
    EditableProfileCard, fetchProfileData, getProfileError, profileReducer,
} from 'features/EditableProfileCard';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import Page from 'shared/ui/Page/Page';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const profileError = useSelector(getProfileError);
    const isAuth = useSelector(getUserAuthData);
    const { id } = useParams<{id: string}>();

    useInitialEffect(() => {
        if (id && isAuth) {
            dispatch(fetchProfileData(id));
        }
    }, [isAuth, id]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page>
                <ProfilePageHeader error={profileError} />
                <EditableProfileCard />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ProfilePage);
