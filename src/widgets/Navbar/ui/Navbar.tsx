import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LogInIcon from 'shared/assets/icons/person-male-svgrepo-com.svg';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import Icon, { IconColor } from 'shared/ui/Icon/Icon';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const userAuthData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        setIsAuthModal(false);
        dispatch(userActions.deleteAuthData());
    }, [dispatch]);

    if (!userAuthData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
                <Button
                    theme={ThemeButton.CLEAR}
                    className={cls.links}
                    type="button"
                    onClick={onOpenModal}
                >
                    <Icon Svg={LogInIcon} className={cls.icon} color={IconColor.BACKGROUND} />
                    {t('log in')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                type="button"
                onClick={onLogOut}
            >
                <Icon Svg={LogInIcon} className={cls.icon} color={IconColor.BACKGROUND} />
                {t('log out')}
            </Button>
        </header>
    );
});
