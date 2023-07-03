import {classNames} from 'shared/lib/classNames/classNames';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import cls from './RightSidebar.module.scss';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import classnames from "classnames";

interface SidebarProps {
    className?: string;
}
export const RightSidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <div className={cls.SidebarTitle}>
                    {/*{contacts.map((contact) => (*/}
                    {/*        <>*/}
                    {/*            {*/}
                    {/*                contact?.avatar?.length > 0*/}
                    {/*                    ? <img src={contact?.avatar} alt=""/>*/}
                    {/*                    : <span className={cls.IconWrap}>*/}
                    {/*                        <AccountCircleIcon*/}
                    {/*                            className={classnames(cls.TabIcon)}*/}
                    {/*                            fontSize="medium"*/}
                    {/*                        />*/}
                    {/*                      </span>*/}
                    {/*            }*/}
                    {/*            <h4>{`${contact?.firstName} ${contact?.lastName}`}</h4>*/}
                    {/*        </>*/}
                    {/*    )*/}
                    {/*)}*/}
                </div>

            </div>
        </div>
    );
};
