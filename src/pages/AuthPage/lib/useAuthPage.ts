import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { registerService } from 'widgets/RegisterForm/models/services/registerService';
import { useState } from 'react';
import { RegisterFormData } from '../models/type/FormType';

export const useAuthPage = () => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
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
    });
    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = methods;
    const onSubmit = (data: RegisterFormData) => {
        dispatch(registerService({ ...data, date: `${data?.day} ${data?.month} ${data?.year}` }))
            // @ts-ignore
            .then((data) => {
                if (data.type === 'register/fulfilled') {
                    toggleModal();
                    reset();
                }
            })
            .catch((e: any) => {
                console.log(e);
            });
    };

    return {
        onSubmit,
        handleSubmit,
        control,
        setValue,
        watch,
        errors,
        modal,
        toggleModal,
    };
};
