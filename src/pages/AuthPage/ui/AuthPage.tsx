import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FormControl, FormHelperText } from '@mui/material';
import { InputText } from 'shared/ui/FormElements/InputText/ui/InputText';
import { InputPass } from 'shared/ui/FormElements/InputPass/ui/InputPass';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Logo from 'shared/assets/icons/facebook.svg';
import React, { useState } from 'react';
import { useAuthPage } from 'pages/AuthPage/lib/useAuthPage';
import { ModalComponent } from 'widgets/ModalComponent/ui/ModalComponent';
import CloseIcon from '@mui/icons-material/Close';
import { Dropdown } from 'shared/ui/FormElements/Dropdown/ui/Dropdown';
import { InputRadioStart } from 'shared/ui/FormElements/RadioStart/ui/RadioStart';
import RegisterForm from 'widgets/RegisterForm';
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

    // const date = useAppSelector((state) => state.dateReduser);

    const {
        onSubmit,
        handleSubmit,
        registerSubmit,
        control,
        watch,
        setValue,
        errors,
    } = useAuthPage();

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
                            <form className={cls.loginForm} onSubmit={handleSubmit(onSubmit)}>
                                <InputText
                                    key="login"
                                    className={cls.inputLogin}
                                    name="login"
                                    label=""
                                    control={control}
                                    status
                                    placeholder="Электронный адрес или номер телефона"
                                />
                                <FormControl fullWidth>
                                    <InputPass
                                        key="password"
                                        name="password"
                                        control={control}
                                        placeholder="Пароль"
                                    />
                                    {errors.password
                                        && <FormHelperText error>{errors.password.message}</FormHelperText>}
                                </FormControl>
                                <Button
                                    key="loginBtn"
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Вход
                                </Button>
                                <Link to="/restore">Забыли пароль?</Link>
                                <span className={cls.horizontalLine} />
                                <Button
                                    key="register"
                                    onClick={() => toggleModal()}
                                    className={cls.registerButton}
                                    size="large"
                                    variant="contained"
                                >
                                    Создать новый аккаунт
                                </Button>
                            </form>
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
