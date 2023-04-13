import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LogInIcon from 'shared/assets/icons/person-male-svgrepo-com.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>{t('hello')}</Modal>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                type="button"
                onClick={onToggleModal}
            >
                <LogInIcon className={classNames(cls.icon, {}, [])} />
                {t('log in')}
            </Button>
        </div>
    );
};
