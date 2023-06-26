import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <Navbar />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
