import { useDispatch, useSelector } from 'react-redux';
import { AuthProviderService, getIsAuth } from 'app/providers/AuthProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthProvider = ({ children }: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(AuthProviderService())
            // @ts-ignore
            .then((data) => {
                if (data.type === 'auth/rejected') {
                    navigate('/auth');
                }
            });
    }, [navigate]);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
