import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfilePage.module.scss';

interface Props {
    className?: string;
}

export const ProfilePage = ({ className }:Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.ProfilePage, {}, [className])} />
    );
};
