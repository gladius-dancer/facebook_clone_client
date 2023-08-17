import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AddPostService } from 'widgets/AddPostForm';
import { useState } from 'react';
import { AddPostSchema } from '../models/types/PostSchema';

export const useAddPost = () => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const schema = yup.object().shape({
        text: yup.string().required('Post text is required!'),
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
        register,
    } = methods;

    const fileName = watch('file');

    const onSubmit = (data: AddPostSchema) => {
        console.log(data);
        const formData: FormData = new FormData();
        formData.append('file', data.file[0]);
        formData.append('text', data.text);
        dispatch(AddPostService(formData))
            // @ts-ignore
            .then((data) => {
                if (data.type === 'addPost/fulfilled') {
                    toggleModal();
                }
            });
    };

    return {
        onSubmit,
        handleSubmit,
        control,
        setValue,
        watch,
        errors,
        register,
        fileName,
        modal,
        toggleModal,
    };
};
