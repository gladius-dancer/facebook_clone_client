import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';

const MarketplacePage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <Navbar />
            {t('Marketplace page')}
        </div>
    );
};

export default MarketplacePage;
