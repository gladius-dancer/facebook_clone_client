import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddPostSchema } from 'entities/Posts/models/types/PostSchema';
import { AddAvatarService } from 'widgets/AddAvatarForm';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { AuthProviderService } from 'app/providers/AuthProvider';

export const useAddAvatar = () => {
    const dispatch = useDispatch();

    const [avatarModal, setAvatarModal] = useState(false);

    const toggleAvatarModal = () => {
        setAvatarModal((prev) => !prev);
    };

    const schema = yup.object().shape({
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
        const formData: FormData = new FormData();
        formData.append('file', data.file[0]);
        dispatch(AddAvatarService(formData))
            // @ts-ignore
            .then((data) => {
                if (data.type === 'addAvatar/fulfilled') {
                    dispatch(AuthProviderService());
                    toggleAvatarModal();
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
        avatarModal,
        toggleAvatarModal,
    };
};
