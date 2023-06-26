import { useDispatch, useSelector } from 'react-redux';
import { authActions, getIsAuth } from 'app/providers/AuthProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthProvider = ({ children }: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(getIsAuth);
    const checkAuthStatus = () => {
        const token = localStorage.getItem('token');
        const isAuthenticated = !!token;
        if (isAuthenticated) {
            navigate('/');
            dispatch(authActions.setAuthenticated(isAuthenticated));
        } else {
            navigate('/auth');
            dispatch(authActions.setAuthenticated(isAuthenticated));
        }
    };

    useEffect(() => {
        checkAuthStatus();
    }, [isAuth]);

    return (<>{children}</>);
};
