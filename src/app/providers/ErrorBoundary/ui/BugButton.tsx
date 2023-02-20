import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

// test button for errorBoundary
const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const makeError = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={makeError}>{t('make an error')}</Button>;
};

export default BugButton;
