import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'app/providers/AuthProvider';
import cls from './FriendsLeftSidebar.module.scss';

interface Props {
    changeType: any;
}

export const FriendsLeftSidebar = ({ changeType }: Props) => {
    const { t } = useTranslation();
    const [tab, setTab] = useState('friends');
    const isAuth = useSelector(getIsAuth).user;

    const changeTab = (type: string) => {
        setTab(type);
        changeType(type);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {}, [])}
        >
            <div className={cls.SidebarItems}>
                <div className={cls.SidebarTitle}>
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
                    {/* <h4>{`${userData?.user?.firstName} ${userData?.user?.lastName}`}</h4> */}
                    <h4 className={cls.SidebarItem}>
                        {
                            `${isAuth?.firstName} ${isAuth?.lastName}`
                        }
                    </h4>
                </div>
                <div
                    className={classnames(cls.SidebarItem, tab === 'friends' ? cls.ActiveItem : '')}
                    onClick={() => changeTab('friends')}
                >
                    <PeopleAltOutlinedIcon fontSize="large" className={cls.TabIcon} />
                    {' '}
                    <span>Друзя</span>
                </div>
                <div
                    className={classnames(cls.SidebarItem, tab === 'requests' ? cls.ActiveItem : '')}
                    onClick={() => changeTab('requests')}
                >
                    <PersonAddAltIcon fontSize="large" className={cls.TabIcon} />
                    {' '}
                    <span>Запросы на добовление в друзя</span>
                </div>
                <div
                    className={classnames(cls.SidebarItem, tab === 'familliars' ? cls.ActiveItem : '')}
                    onClick={() => changeTab('familliars')}
                >
                    <GroupsOutlinedIcon fontSize="large" className={cls.TabIcon} />
                    <span>Люди, которых вы можете знать</span>
                </div>
            </div>
        </div>
    );
};
