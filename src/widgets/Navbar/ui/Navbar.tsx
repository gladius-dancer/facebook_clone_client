import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';
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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import LogoutIcon from '@mui/icons-material/Logout';

import {Input} from 'shared/ui/Input/Input';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {useLocation, useNavigate} from 'react-router-dom';
import cls from './Navbar.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getUserData, loginActions} from "widgets/LoginForm";
import {LogoutService} from "app/providers/AuthProvider/models/services/AuthProviderService";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [popup, setPopup] = useState(false);
    const location = useLocation();
    const [currentTab, setCurrentTab] = useState(`${location.pathname}`);
    const userData = useSelector(getUserData);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const togglePopup = (event: React.MouseEvent)=>{
        setPopup(prev=>!prev);
    }
    const logout = async () => {
        await dispatch(LogoutService());
        await dispatch(loginActions.logout);
        navigate('/auth');
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.NavbarLeft}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <LogoSmall/>
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
                    <HomeOutlinedIcon fontSize="medium" className={cls.TabIcon}/>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.friends}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/friends' ? cls.TabItemActive : '')}
                >
                    <PeopleAltOutlinedIcon fontSize="medium" className={cls.TabIcon}/>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.marketplace}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/marketplace' ? cls.TabItemActive : '')}
                >
                    <StoreOutlinedIcon fontSize="medium" className={cls.TabIcon}/>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.groups}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/groups' ? cls.TabItemActive : '')}
                >
                    <GroupsOutlinedIcon fontSize="medium" className={cls.TabIcon}/>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.games}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/games' ? cls.TabItemActive : '')}
                >
                    <VideogameAssetOutlinedIcon fontSize="medium" className={cls.TabIcon}/>
                </AppLink>
            </div>
            <ul className={cls.NavbarRight}>
                <li>
                    <AppsIcon className={classnames(cls.TabIcon)} fontSize="medium"/>
                </li>
                <li>
                    <MarkUnreadChatAltIcon className={classnames(cls.TabIcon)} fontSize="medium"/>
                </li>
                <li>
                    <NotificationsActiveIcon className={classnames(cls.TabIcon)} fontSize="medium"/>
                </li>
                <li>
                    <AccountCircleIcon onClick={(event)=>togglePopup(event)} className={classnames(cls.TabIcon)} fontSize="medium"/>
                    <div className={classnames(cls.AccountPopup, popup ? "visible" : "hide") }>
                        <div className={cls.AccountPupupTitle}>
                            {userData?.user?.avatar?.length > 0
                                ? <img src={userData?.user?.avatar} alt=""/>
                                : <li>
                                    <AccountCircleIcon className={classnames(cls.TabIcon)} fontSize="medium"/>
                                </li>
                            }

                            <h4>{`${userData?.user?.firstName} ${userData?.user?.lastName}`}</h4>
                        </div>
                        <div className={cls.AccountPupupBody}>
                            <ThemeSwitcher/>
                            <span className={cls.PupupItem} onClick={() => logout()}>
                               <li><LogoutIcon/></li> <span>Выйти</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
