import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

const ProfileCard = () => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    const profileError = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [])}>
            <Text title={t('profile card')} />
            {profileError && <Text text={profileError} theme={TextTheme.ERROR} />}
            {!profileError && (
                <div className={cls.profileData}>
                    <Input value={profileData?.firstname} placeholder={t('your name:')} />
                    <Input value={profileData?.lastname} placeholder={t('your lastname:')} />
                    <Button theme={ThemeButton.FILLED}>{t('edit')}</Button>
                </div>
            )}
        </div>
    );
};

export default ProfileCard;
