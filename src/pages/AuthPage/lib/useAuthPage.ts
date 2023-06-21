import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValues } from 'pages/AuthPage/type/FormType';

export const useAuthPage = () => {
    const schema = yup.object().shape({
        login: yup.string().email().required(),
        password: yup.string().required().min(6),
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit, control, setValue, watch, formState: { errors },
    } = methods;
    const onSubmit = (data: FormValues) => console.log(data);
    const registerSubmit = (data: FormValues) => console.log(data);

    return {
        onSubmit,
        registerSubmit,
        handleSubmit,
        control,
        setValue,
        watch,
        errors,
    };
};
