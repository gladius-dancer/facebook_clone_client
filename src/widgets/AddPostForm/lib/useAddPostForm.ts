import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AddPostService } from 'widgets/AddPostForm';
import { AddPostSchema } from '../models/types/AddPostSchema';

export const useAddPostForm = () => {
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        text: yup.string().required('Post text is required!'),
        file: yup.mixed()
            .required("Required")
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors },
        register
    } = methods;

    const fileName = watch("file");

    const onSubmit = (data: AddPostSchema) => {
        const formData: FormData  = new FormData();
        formData.append('file', data.file[0]);
        formData.append('text', data.text);
        dispatch(AddPostService(formData));
    };

    return {
        onSubmit,
        handleSubmit,
        control,
        setValue,
        watch,
        errors,
        register,
        fileName
    };
};
