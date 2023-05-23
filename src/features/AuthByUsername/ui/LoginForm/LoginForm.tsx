import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className? : string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.changeUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.changePassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        console.log('login');
    }, []);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={`${t('username')}:`}
                className={cls.input}
                autoFocus
                onChange={onChangeUserName}
            />
            <Input
                placeholder={`${t('password')}:`}
                className={cls.input}
                type="password"
                onChange={onChangePassword}
            />
            <Button
                className={cls.button}
                theme={ThemeButton.MODAL}
                onClick={onLoginClick}
            >
                {t('log in')}
            </Button>
        </div>
    );
});

export default LoginForm;
