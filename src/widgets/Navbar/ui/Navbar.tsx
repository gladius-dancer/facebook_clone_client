import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import LogoSmall from 'shared/assets/icons/logo.svg';
import classnames from 'classnames';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Input } from 'shared/ui/Input/Input';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useLocation } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const location = useLocation();
    const [currentTab, setCurrentTab] = useState(`${location.pathname}`);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.NavbarLeft}>
                <LogoSmall />
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
                    <HomeIcon fontSize="medium" className={cls.TabIcon} />
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.friends}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/friends' ? cls.TabItemActive : '')}
                >
                    <PeopleIcon fontSize="medium" className={cls.TabIcon} />
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.marketplace}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/marketplace' ? cls.TabItemActive : '')}
                >
                    <StoreIcon fontSize="medium" className={cls.TabIcon} />
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.groups}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/groups' ? cls.TabItemActive : '')}
                >
                    <GroupsIcon fontSize="medium" className={cls.TabIcon} />
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.games}
                    className={classnames(cls.item, cls.TabItem, currentTab === '/games' ? cls.TabItemActive : '')}
                >
                    <VideogameAssetIcon fontSize="medium" className={cls.TabIcon} />
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
                </li>
                <li>
                    <AccountCircleIcon className={classnames(cls.TabIcon)} fontSize="medium" />
                    {/* <div className={cls.AccountPopup}> */}
                    {/*    <div className={cls.AccountPupupTitle}> */}
                    {/*        <img src="" alt="" /> */}
                    {/*        <h1 /> */}
                    {/*    </div> */}
                    {/*    <ul> */}
                    {/*        <li> */}
                    {/*            Выйти */}
                    {/*        </li> */}
                    {/*    </ul> */}
                    {/* </div> */}
                </li>
            </ul>
        </div>
    );
};
