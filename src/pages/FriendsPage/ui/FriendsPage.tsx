import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import cls from 'pages/MainPage/ui/MainPage.module.scss';
import { LeftSidebar } from 'widgets/LeftSidebar';
import { Users } from 'entities/Users/ui/Users';
import { Unfriend } from 'entities/Unfriend/ui/Unfriend';
import { useSelector } from 'react-redux';
import { getFamilliars } from 'entities/Users/models/selectors/GetFamilliars';
import { User, UserSchema } from 'entities/Users/models/types/UserSchema';
import style from './FriendsPage.module.scss';

const FriendsPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const familliars = useSelector(getFamilliars);

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
                        <Unfriend img="sdfds" ourFriends={[]} firstName="hfgdfh" lastName="dhgdfhdf" />
                    </Users>
                    <h2 className={style.Header}>Люди, которых вы можете знать</h2>
                    <Users>
                        {familliars?.map((familliar: User) => (
                            <Unfriend
                                img={familliar.avatar}
                                ourFriends={[]}
                                firstName={familliar.firstName}
                                lastName={familliar.lastName}
                            />
                        ))}
                    </Users>
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
