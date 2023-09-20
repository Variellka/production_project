import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'features/EditableProfileCard';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    error?: string;
}

const ProfilePageHeader = ({ error } : ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const profileReadonly = useSelector(getProfileReadonly);
    const currentAuthUser = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = profileData?.id === currentAuthUser?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    if (error) {
        return (
            <Text title={t('profile card')} />
        );
    }

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <Text title={t('profile card')} className={cls.profileHeader} />
            {canEdit && (
                <>
                    {profileReadonly && canEdit && (
                        <Button
                            theme={ThemeButton.FILLED}
                            onClick={onEdit}
                        >
                            {t('edit')}
                        </Button>
                    )}
                    {!profileReadonly && (
                        <div className={cls.profileButtonsWrapper}>
                            <Button
                                theme={ThemeButton.FILLED}
                                onClick={onSave}
                            >
                                {t('save')}
                            </Button>
                            <Button
                                theme={ThemeButton.FILLED_ALERT}
                                onClick={onCancelEdit}
                            >
                                {t('cancel')}
                            </Button>
                        </div>

                    )}
                </>
            )}

        </div>
    );
};

export default ProfilePageHeader;
