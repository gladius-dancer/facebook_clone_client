import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import cls from 'pages/MainPage/ui/MainPage.module.scss';
import { LeftSidebar } from 'widgets/LeftSidebar';
import { Users } from 'features/Users/ui/Users';
import { Unfriend } from 'features/Unfriend/ui/Unfriend';
import style from './FriendsPage.module.scss';

const FriendsPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <Navbar />
            <div className={cls.MainPageBody}>
                <div className={cls.MainPageLeft}>
                    <LeftSidebar />
                </div>
                <div className={style.FriendsPageCenter}>
                    <h2 className={style.Header}>Запросы на добавление в друзья</h2>
                    <Users>
                        <Unfriend />
                    </Users>
                    <h2 className={style.Header}>Люди, которых вы можете знать</h2>
                    <Users>
                        <Unfriend />
                    </Users>
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
