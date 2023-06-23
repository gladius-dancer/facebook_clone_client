import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Logo from 'shared/assets/icons/facebook.svg';
import React, { useState } from 'react';
import { ModalComponent } from 'widgets/ModalComponent/ui/ModalComponent';
import { RegisterForm } from 'widgets/RegisterForm';
import LoginForm from 'widgets/LoginForm';
import cls from './AuthPage.module.scss';

interface Props {
    className?: string;
}
const AuthPage = ({ className }:Props) => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <>
            <div className={classNames(cls.AuthPage, {}, [])}>
                <div className={cls.container}>
                    <div className={cls.loginInner}>
                        <div className={cls.leftContent}>
                            <div className={cls.leftContentInner}>
                                <Logo className={cls.logo} />
                                <p>Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.</p>
                            </div>
                        </div>
                        <div className={cls.rightContent}>
                            <LoginForm toggleModal={() => toggleModal()} />
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent isOpen={modal}>
                <RegisterForm setModal={() => toggleModal()} />
            </ModalComponent>
        </>
    );
};
export default AuthPage;
