import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import { ProfileType } from 'entities/Profile/model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: ProfileType,
    error?:string,
    isLoading?: boolean
}

const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const { data, error, isLoading } = props;

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [])}>
                <Text text={error} theme={TextTheme.ERROR} align={TextAlign.CENTER} />
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [])}>
            <Text title={t('profile card')} />
            <div className={cls.profileData}>
                <Input
                    value={data?.firstname}
                    placeholder={t('your name:')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('your lastname:')}
                    className={cls.input}
                />
                <Button theme={ThemeButton.FILLED}>{t('edit')}</Button>
            </div>
        </div>
    );
};

export default ProfileCard;
