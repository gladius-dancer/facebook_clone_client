import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { PageLoader } from 'shared/ui/PageLoader/ui/PageLoader';
import { getPageLoader } from 'shared/ui/PageLoader/selector/GetPageLoader';
import { NotifiComponent } from 'shared/ui/Notifications/ui/NotifiComponent';
import { postsActions } from 'features/Posts/models/slices/PostSlice';

Modal.setAppElement('#root');
function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const loader = useSelector(getPageLoader);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <AppRouter />
                { loader && <PageLoader /> }
                <NotifiComponent />
            </Suspense>
        </div>
    );
}
export default App;
