import { useTranslation } from 'react-i18next';
import { InputText } from 'shared/ui/FormElements/InputText/ui/InputText';
import { InputPass } from 'shared/ui/FormElements/InputPass/ui/InputPass';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import React from 'react';
import { FormControl } from '@mui/material';
import { useLoginForm } from 'widgets/LoginForm/lib/useLoginForm';
import cls from './LoginForm.module.scss';

interface Props {
    className?: string;
    setModal?: any;
    toggleModal: ()=>void;
}
export const LoginForm = ({ className, setModal, toggleModal }:Props) => {
    const { t } = useTranslation();
    const { onSubmit, handleSubmit, control } = useLoginForm();
    return (
        <form className={cls.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <InputText
                key="email"
                className={cls.inputLogin}
                name="email"
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
    );
};
