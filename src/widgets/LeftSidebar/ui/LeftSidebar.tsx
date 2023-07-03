import {classNames} from 'shared/lib/classNames/classNames';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import cls from './LeftSidebar.module.scss';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import classnames from "classnames";
import {useSelector} from "react-redux";
import {getUserData} from "widgets/LoginForm";

interface SidebarProps {
    className?: string;
}

export const LeftSidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const userData = useSelector(getUserData);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <div className={cls.SidebarItems}>
                <div className={cls.SidebarTitle}>
                    {userData?.user?.avatar?.length > 0
                        ? <img src={userData?.user?.avatar} alt=""/>
                        : <span className={cls.IconWrap}>
                                            <AccountCircleIcon className={classnames(cls.TabIcon)} fontSize="medium"/>
                                        </span>
                    }
                    {/*<h4>{`${userData?.user?.firstName} ${userData?.user?.lastName}`}</h4>*/}
                    <h4 className={cls.SidebarItem} >
                        {
                            `${JSON.parse(localStorage.getItem("user"))?.firstName} 
                                             ${JSON.parse(localStorage.getItem("user"))?.lastName}`
                        }
                    </h4>
                </div>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.friends}
                    className={cls.SidebarItem}
                >
                    <PeopleAltOutlinedIcon fontSize="large" className={cls.TabIcon}/> <span>Друзя</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.SidebarItem}
                >
                    <HomeOutlinedIcon fontSize="large" className={cls.TabIcon}/> <span>Лента</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.groups}
                    className={cls.SidebarItem}
                >
                    <GroupsOutlinedIcon fontSize="large" className={cls.TabIcon}/><span>Группы</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.marketplace}
                    className={cls.SidebarItem}
                >
                    <StoreOutlinedIcon fontSize="large" className={cls.TabIcon}/><span>Marketplace</span>
                </AppLink>
            </div>
        </div>
    );
};
