import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Users.module.scss';

interface Props {
    className?: string;
}

export const Users = ({ className }:Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.Users, {}, [className])} />
    );
};
