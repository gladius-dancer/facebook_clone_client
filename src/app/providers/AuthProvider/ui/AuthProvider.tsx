import { useDispatch, useSelector } from 'react-redux';
import {authProviderActions, AuthProviderService, getIsAuth} from 'app/providers/AuthProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthProvider = ({ children }: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(getIsAuth);

    useEffect(()=>{
        dispatch(AuthProviderService());
        // navigate('/');
    },[]);

    return (<>{children}</>);
};
