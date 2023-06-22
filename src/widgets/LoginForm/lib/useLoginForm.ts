import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { LoginFormType } from '../models/types/loginSchema';

export const useLoginForm = () => {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        email: yup.string().email('Should be email!').required('Email is required!'),
        password: yup.string().required('Password is required!').min(6, 'Max with 6 characters'),
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit, control, setValue, watch, formState: { errors },
    } = methods;
    const onSubmit = (data: LoginFormType) => {
        console.log(data);
    };

    return {
        onSubmit,
        handleSubmit,
        control,
    };
};
