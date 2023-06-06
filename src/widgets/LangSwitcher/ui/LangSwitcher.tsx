import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
  short?: boolean
}

const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleClick = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggleClick}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'short language' : 'language')}
        </Button>
    );
});

export default LangSwitcher;
