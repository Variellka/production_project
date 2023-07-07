import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import { ProfileType } from 'entities/Profile/model/types/profile';
import Avatar from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: ProfileType,
    error?:string,
    isLoading?: boolean,
    readonly?: boolean,
    onChangeFirstname?: (value: string) => void,
    onChangeLastname?: (value: string) => void,
    onChangeAge?: (value: number) => void,
    onChangeCity?: (value: string) => void,
    onChangeCountry?: (value: string) => void,
    onChangeCurrency?: (value: string) => void,
    onChangeUsername?: (value: string) => void,
    onChangeAvatar?: (value: string) => void,
}

const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        data, error, isLoading, readonly, onChangeFirstname, onChangeLastname,
        onChangeAge, onChangeCity, onChangeCountry, onChangeCurrency, onChangeUsername, onChangeAvatar,
    } = props;

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
            <div className={cls.profileData}>
                <Avatar src={data?.avatar} size={120} />
                <Input
                    value={data?.username}
                    placeholder={`${t('username')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.firstname}
                    placeholder={`${t('name')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={`${t('lastname')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={`${t('age')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                    type="number"
                />
                <Input
                    value={data?.city}
                    placeholder={`${t('city')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.country}
                    placeholder={`${t('country')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCountry}
                />
                <Input
                    value={data?.currency}
                    placeholder={`${t('currency')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                />
                <Input
                    value={data?.avatar}
                    placeholder={`${t('avatar')}:`}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
