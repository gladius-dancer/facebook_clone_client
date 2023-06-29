import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AddPostType } from '../models/types/AddPostsType';

export const useAddPostForm = () => {
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        text: yup.string().required('Name is required!'),
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors },
    } = methods;
    const onSubmit = (data: AddPostType) => {
        // dispatch(AddPostService());
        console.log(data);
    };

    return {
        onSubmit,
        handleSubmit,
        control,
        setValue,
        watch,
        errors,
    };
};
