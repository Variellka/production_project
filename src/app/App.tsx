import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';
import { getUserDataInited, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const useDataInited = useSelector(getUserDataInited);

    useEffect(() => {
        dispatch(userActions.initAuthDate());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    {useDataInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
