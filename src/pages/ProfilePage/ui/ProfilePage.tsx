import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducerList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div>{t('profile page')}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
