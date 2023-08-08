import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { RegisterFormData } from 'widgets/RegisterForm/models/types/registerFormData';
import { registerService } from 'widgets/RegisterForm/models/services/registerService';

interface DateState {
    day: string[];
    month: string[];
    year: string[];
}
export const useUsers = () => {
    const dispatch = useDispatch();

    const date:DateState = {
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

    const schema = yup.object().shape({
        firstName: yup.string().required('Name is required!'),
        lastName: yup.string().required('Last name is required!'),
        email: yup.string().email('Should be email!').required('Email is required!'),
        password: yup.string().required('Password is required!').min(6, 'Max with 6 characters'),
        day: yup.string().required('Day is required!'),
        month: yup.string().required('Month is required!'),
        year: yup.string().required('Year is required!'),
        gender: yup.string(),
        file: yup.mixed()
            .required('Required'),
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors },
    } = methods;
    const onSubmit = (data: RegisterFormData) => {
        dispatch(registerService({ ...data, date: `${data?.day} ${data?.month} ${data?.year}` }));
    };

    return {
        onSubmit,
        handleSubmit,
        control,
        setValue,
        watch,
        errors,
        date,
    };
};
