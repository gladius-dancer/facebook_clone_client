import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { InputText } from 'shared/ui/FormElements/InputText/ui/InputText';
import { InputPass } from 'shared/ui/FormElements/InputPass/ui/InputPass';
import { Dropdown } from 'shared/ui/FormElements/Dropdown/ui/Dropdown';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import React from 'react';
import { useRegisterForm } from 'widgets/RegisterForm/lib/useRegisterForm';
import RadioGroupComponent from 'shared/ui/FormElements/RadioGroup/ui/RadioGroup';
import cls from './RegisterForm.module.scss';

interface Props {
    className?: string;
    setModal?: any;
}
interface DateState {
    day: string[];
    month: string[];
    year: string[];
}

const gender = [{
    label: 'Мужской',
    value: 'male',
}, {
    label: 'Женский',
    value: 'female',
}, {
    label: 'Другое',
    value: 'yourVersion',
}];
export const RegisterForm = ({ className, setModal }:Props) => {
    const { t } = useTranslation();

    const date:DateState = {
        day: ['1', '2', '3', '4'],
        month: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
        year: ['1990', '1991', '1992'],
    };

    const {
        onSubmit,
        control,
        handleSubmit,
        watch,
        setValue,
        errors,
    } = useRegisterForm();

    console.log(errors);

    return (
        <>
            <div className={cls.modalHeader}>
                <CloseIcon
                    className={cls.modalClose}
                    onClick={() => setModal()}
                />
                <h2 className={cls.modalHeaderTitle}>Регистрация</h2>
                <p className={cls.modalSubHeader}>Быстро и легко.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={cls.modalForm}>
                <div className={cls.modalInnerTop}>
                    <InputText
                        key="name"
                        name="firstName"
                        label=""
                        control={control}
                        status
                        placeholder="Имя"
                        size="small"
                    />
                    <InputText
                        key="lastName"
                        name="lastName"
                        label=""
                        control={control}
                        status
                        placeholder="Фамилия"
                        size="small"
                    />
                </div>

                <InputText
                    key="email"
                    name="email"
                    label=""
                    control={control}
                    status
                    placeholder="Эл. адрес"
                    size="small"
                />
                <InputPass
                    key="password"
                    name="password"
                    control={control}
                    placeholder="Пароль"
                    size="small"
                />
                <p className="form-title">Дата рождения</p>
                <div className={cls.modalSelects}>
                    <Dropdown
                        key="day"
                        name="day"
                        label=""
                        control={control}
                        options={date.day}
                        size="small"
                    />
                    <Dropdown
                        key="month"
                        name="month"
                        label=""
                        control={control}
                        options={date.month}
                        size="small"
                    />
                    <Dropdown
                        key="year"
                        name="year"
                        label=""
                        control={control}
                        options={date.year}
                        size="small"
                    />
                </div>
                <p className="form-title">Пол</p>
                <div className="d-flex justify-content-between gap-2 me-3">
                    <RadioGroupComponent
                        name="gender"
                        items={gender}
                        className={cls.modalRadioGroup}
                        control={control}
                    />
                </div>
                <div className="register-info">
                    <span>
                        Люди, которые пользуются нашим сервисом,
                        могли загрузить вашу контактную информацию на Facebook.
                    </span>
                    <Link to="/">Подробнее</Link>
                    <span>Нажимая кнопку "Регистрация", вы принимаете наши </span>
                    <Link to="/"> Условия использования, </Link>
                    <Link to="/">Политику конфиденциальности</Link>
                    <span> и </span>
                    <Link to="/">Политику в отношении файлов cookie.</Link>
                </div>

                <Button
                    type="submit"
                    className="register-button text-capitalize fs-6 fw-bold pt-1 pb-1 ms-auto me-auto w-50"
                    size="small"
                    variant="contained"
                >
                    Регистрация
                </Button>
            </form>
        </>
    );
};
