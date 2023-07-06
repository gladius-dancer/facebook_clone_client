import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from '@mui/material/Button';
import cls from './Friends.module.scss';

interface Props {
    className?: string;
}

export const Friend = ({ className }:Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Friends, {}, [className])} />
    );
};
