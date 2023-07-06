import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Users.module.scss';

interface Props {
    className?: string;
    children: any;
}

export const Users = ({ className, children }:Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Users, {}, [className])}>
            {children}
        </div>
    );
};
