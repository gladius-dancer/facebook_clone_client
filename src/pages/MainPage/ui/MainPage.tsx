import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import { Posts } from 'entities/Posts/ui/Posts';
import { LeftSidebar } from 'widgets/LeftSidebar';
import { RightSidebar } from 'widgets/RightSidebar/ui/RightSidebar';
import { useDispatch } from 'react-redux';
import { PostsService } from 'entities/Posts/models/services/PostsServices';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onChange = (val: string) => {
        setValue(val);
    };

    useEffect(() => {
        dispatch(PostsService());
    });

    return (
        <div className={cls.MainPage}>
            <Navbar />
            <div className={cls.MainPageBody}>
                <div className={cls.MainPageLeft}>
                    <LeftSidebar />
                </div>
                <div className={cls.MainPageCenter}>
                    <Posts />
                </div>
                <div className={cls.MainPageRight}>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
