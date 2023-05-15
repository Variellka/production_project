import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LogInIcon from 'shared/assets/icons/person-male-svgrepo-com.svg';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                type="button"
                onClick={onOpenModal}
            >
                <LogInIcon className={classNames(cls.icon, {}, [])} />
                {t('log in')}
            </Button>
        </div>
    );
};
