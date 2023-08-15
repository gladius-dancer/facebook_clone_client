import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AddPostService } from 'widgets/AddPostForm';

export const useSendMessage = () => {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        text: yup.string().required('Post text is required!'),
        // file: yup.mixed()
        //     .required('Required'),
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

    // const fileName = watch('file');

    const onSubmit = (data: any) => {
        console.log(data);
        // const formData: FormData = new FormData();
        // formData.append('file', data.file[0]);
        // formData.append('text', data.text);
        dispatch(AddPostService(data));
    };

    return {
        onSubmit,
        handleSubmit,
        control,
        setValue,
        watch,
        errors,
        register,
        // fileName,
    };
};
