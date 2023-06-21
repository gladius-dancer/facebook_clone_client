import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValues } from 'pages/AuthPage/type/FormType';

export const useRegisterForm = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        telephone: yup.string().required(),
        password: yup.string().required().min(6),
        day: yup.number().required(),
        month: yup.string().required(),
        year: yup.number().required(),
        gender: yup.string().required(),
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors },
    } = methods;
    const onSubmit = (data: FormValues) => console.log(data);

    return {
        onSubmit,
        handleSubmit,
        control,
        setValue,
        watch,
        errors,
    };
};
