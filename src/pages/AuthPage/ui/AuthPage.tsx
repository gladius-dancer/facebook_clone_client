import { classNames } from 'shared/lib/classNames/classNames';
import Logo from 'shared/assets/icons/facebook.svg';
import React, { useEffect, useState } from 'react';
import { ModalComponent } from 'shared/ui/ModalComponent/ui/ModalComponent';
import { RegisterForm } from 'widgets/RegisterForm';
import { LoginForm } from 'widgets/LoginForm';
import { useAuthPage } from 'pages/AuthPage/lib/useAuthPage';
import cls from './AuthPage.module.scss';

const AuthPage = () => {
    const methods = useAuthPage();
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
                            <LoginForm toggleModal={() => methods.toggleModal()} />
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent isOpen={methods.modal} setModal={() => methods.toggleModal()}>
                <RegisterForm methods={methods} />
            </ModalComponent>
        </>
    );
};
export default AuthPage;
