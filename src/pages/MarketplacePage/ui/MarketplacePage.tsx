import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import cls from 'pages/MainPage/ui/MainPage.module.scss';
import { LeftSidebar } from 'widgets/LeftSidebar';
import { RightSidebar } from 'widgets/RightSidebar/ui/RightSidebar';

const MarketplacePage = () => {
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
                <div className={cls.MainPageCenter} />
                <div className={cls.MainPageRight}>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default MarketplacePage;
