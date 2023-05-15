import React, {
    FC, ReactNode, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void
}

export const Modal:FC<ModalProps> = (props) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const { theme } = useTheme();

    const [isOpening, setIsOpening] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (isOpen) {
            ref.current = setTimeout(() => {
                setIsOpening(true);
            }, 0);
        }
        return () => {
            setIsOpening(false);
            setIsClosing(false);
            clearTimeout(ref.current);
        };
    }, [isOpen]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpening,
        [cls.isClosing]: isClosing,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        if (isOpen) {
            setIsClosing(true);
            ref.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, 200);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
