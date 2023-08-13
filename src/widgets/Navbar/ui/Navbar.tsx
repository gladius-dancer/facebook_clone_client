import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef, useState } from 'react';
import LogoSmall from 'shared/assets/icons/logo.svg';
import classnames from 'classnames';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Input } from 'shared/ui/Input/Input';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, loginActions } from 'widgets/LoginForm';
import { LogoutService } from 'app/providers/AuthProvider/models/services/AuthProviderService';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { getIsAuth } from 'app/providers/AuthProvider';
// import socket from 'shared/ui/Socket/Socket';
import { io } from 'socket.io-client';
import cls from './Navbar.module.scss';

const socket = io('http://localhost:7001');

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [popup, setPopup] = useState(false);
    const location = useLocation();
    const [currentTab, setCurrentTab] = useState(`${location.pathname}`);
    const userData = useSelector(getUserData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AccountPopup = useRef(null);
    const Account = useRef(null);
    const isAuth = useSelector(getIsAuth).user;
    const [notify, setNotify] = useState([]);

    const logout = async () => {
        await dispatch(LogoutService());
        await dispatch(loginActions.logout);
        navigate('/auth');
        window.location.reload();
    };
    const handleClick = (event: MouseEvent) => {
        const targetElement = event.target;
        const containBody = AccountPopup.current.contains(targetElement);
        const containAccountIcon = Account.current.contains(targetElement);

        if (!containBody && !containAccountIcon) {
            setPopup((prev) => false);
        }
        if (containAccountIcon) {
            setPopup((prev) => !prev);
        }
    };

    useEffect(() => {
        console.log('Hello');
        socket.on('getNotification', (data: any) => setNotify(data));
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.NavbarLeft}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <LogoSmall />
                </AppLink>

                <Input
                    key="search"
                    placeholder="Поиск на Facebook"
                    className={cls.Search}
                />
            </div>
            <div className={classnames(cls.NavbarCenter, cls.Tabs)}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/' ? cls.TabItemActive : '')}
                >
                    <HomeOutlinedIcon fontSize="large" className={cls.TabIcon} />
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.friends}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/friends' ? cls.TabItemActive : '')}
                >
                    <PeopleAltOutlinedIcon fontSize="large" className={cls.TabIcon} />
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.marketplace}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/marketplace' ? cls.TabItemActive : '')}
                >
                    <StoreOutlinedIcon fontSize="large" className={cls.TabIcon} />
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.groups}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/groups' ? cls.TabItemActive : '')}
                >
                    <GroupsOutlinedIcon fontSize="large" className={cls.TabIcon} />
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.games}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/games' ? cls.TabItemActive : '')}
                >
                    <VideogameAssetOutlinedIcon fontSize="large" className={cls.TabIcon} />
                </AppLink>
            </div>
            <ul className={cls.NavbarRight}>
                <li>
                    <AppsIcon className={classnames(cls.TabIcon)} fontSize="medium" />
                </li>
                <li>
                    <MarkUnreadChatAltIcon className={classnames(cls.TabIcon)} fontSize="medium" />
                </li>
                <li>
                    <NotificationsActiveIcon className={classnames(cls.TabIcon)} fontSize="medium" />
                    <div className={cls.Notify}>
                        {notify.map((item) => (
                            <div>
                                <p>{item?.sender}</p>
                            </div>
                        ))}
                    </div>
                </li>
                <li ref={Account}>
                    {isAuth?.avatar?.length > 0
                        ? (
                            <span className={cls.IconWrap}>
                                <img src={isAuth?.avatar} alt="" />
                            </span>
                        )
                        : (
                            <span className={cls.IconWrap}>
                                <AccountCircleIcon className={classnames(cls.TabIcon)} fontSize="medium" />
                            </span>
                        )}
                    <div
                        ref={AccountPopup}
                        className={classnames(cls.AccountPopup, popup ? 'visible' : 'hide')}
                    >
                        <div className={cls.AccountPupupTitle} onClick={() => navigate('/profile')}>
                            {isAuth?.avatar?.length > 0
                                ? (
                                    <span className={cls.IconWrap}>
                                        <img src={isAuth.avatar} alt="" />
                                    </span>
                                )
                                : (
                                    <span className={cls.IconWrap}>
                                        <AccountCircleIcon className={classnames(cls.TabIcon)} fontSize="medium" />
                                    </span>
                                )}
                            {/* <h4>{`${userData?.user?.firstName} ${userData?.user?.lastName}`}</h4> */}
                            <h4>
                                {
                                    `${isAuth?.firstName} ${isAuth?.lastName}`
                                }
                            </h4>
                        </div>
                        <div className={cls.AccountPupupBody}>
                            <ThemeSwitcher />
                            <span className={cls.PupupItem} onClick={() => logout()}>
                                <span className={cls.IconWrap}><LogoutIcon /></span>
                                <span>Выйти</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
