import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className? : string
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={`${t('username')}:`} className={cls.input} autoFocus />
            <Input placeholder={`${t('password')}:`} className={cls.input} type="password" />
            <Button className={cls.button} theme={ThemeButton.MODAL}>
                {t('log in')}
            </Button>
        </div>
    );
};

export default LoginForm;
