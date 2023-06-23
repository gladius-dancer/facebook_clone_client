import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Btn, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Btn
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Btn>
        </div>
    );
};
