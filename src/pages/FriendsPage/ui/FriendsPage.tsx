import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';

const FriendsPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <Navbar />
            {t('Friends page')}
        </div>
    );
};

export default FriendsPage;
