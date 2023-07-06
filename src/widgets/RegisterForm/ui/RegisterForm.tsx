import { useTranslation } from 'react-i18next';
import { InputText } from 'shared/ui/FormElements/InputText/ui/InputText';
import { InputPass } from 'shared/ui/FormElements/InputPass/ui/InputPass';
import { Dropdown } from 'shared/ui/FormElements/Dropdown/ui/Dropdown';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import React from 'react';
import RadioGroupComponent from 'shared/ui/FormElements/RadioGroup/ui/RadioGroup';
import cls from './RegisterForm.module.scss';

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

const date: DateState = {
    day: [
        '1', '2', '3', '4', '5', '6',
        '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22',
        '23', '24', '25', '26', '27',
        '28', '29', '30', '31'],
    month: ['Январь', 'Февраль', 'Март', 'Апрель',
        'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'],
    year: ['1990', '1991', '1992', '1993',
        '1994', '1995', '1996', '1997',
        '1998', '1999', '2000', '2001',
        '2002', '2003', '2004', '2005',
        '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013',
        '2014', '2015', '2016', '2017',
        '2018', '2019', '2020', '2021',
        '2022', '2023'],
};
export const RegisterForm = ({ methods }: any) => {
    const { t } = useTranslation();

    return (
        <>
            <div className={cls.modalHeader}>
                <h2 className={cls.modalHeaderTitle}>Регистрация</h2>
                <p className={cls.modalSubHeader}>Быстро и легко.</p>
            </div>
            <form onSubmit={methods.handleSubmit(methods.onSubmit)} className={cls.modalForm}>
                <div className={cls.modalInnerTop}>
                    <InputText
                        key="name"
                        name="firstName"
                        label=""
                        control={methods.control}
                        status
                        placeholder="Имя"
                        size="small"
                    />
                    <InputText
                        key="lastName"
                        name="lastName"
                        label=""
                        control={methods.control}
                        status
                        placeholder="Фамилия"
                        size="small"
                    />
                </div>

                <InputText
                    key="email"
                    name="email"
                    label=""
                    control={methods.control}
                    status
                    placeholder="Эл. адрес"
                    size="small"
                />
                <InputPass
                    key="password"
                    name="password"
                    control={methods.control}
                    placeholder="Пароль"
                    size="small"
                />
                <p className="form-title">Дата рождения</p>
                <div className={cls.modalSelects}>
                    <Dropdown
                        key="day"
                        name="day"
                        label=""
                        control={methods.control}
                        options={date.day}
                        size="small"
                    />
                    <Dropdown
                        key="month"
                        name="month"
                        label=""
                        control={methods.control}
                        options={date.month}
                        size="small"
                    />
                    <Dropdown
                        key="year"
                        name="year"
                        label=""
                        control={methods.control}
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
                        control={methods.control}
                    />
                </div>
                <div className="register-info">
                    <span>
                        Люди, которые пользуются нашим сервисом,
                        могли загрузить вашу контактную информацию на Facebook.
                    </span>
                    <Link to="/">Подробнее</Link>
                    <span>Нажимая кнопку Регистрация, вы принимаете наши </span>
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
