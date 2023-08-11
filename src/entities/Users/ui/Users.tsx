import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    FamilliarService, FriendRequestsService, FriendService, UnfriendService,
} from 'entities/Users';
import cls from './Users.module.scss';

interface Props {
    className?: string;
    children: any;
}

export const Users = ({ className, children }:Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FriendService());
        dispatch(UnfriendService());
        dispatch(FamilliarService());
        dispatch(FriendRequestsService());
    }, []);
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Users, {}, [className])}>
            {children}
        </div>
    );
};
