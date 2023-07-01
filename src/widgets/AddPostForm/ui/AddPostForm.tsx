import { useTranslation } from 'react-i18next';
import cls from 'widgets/RegisterForm/ui/RegisterForm.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import Button from '@mui/material/Button';
import { useAddPostForm } from 'widgets/AddPostForm/lib/useAddPostForm';
import { InputFile } from 'shared/ui/FormElements/InputFile/ui/InputFile';
import { MultiLine } from 'shared/ui/FormElements/Multiline/ui/MultiLine';

interface Props {
    className?: string;
    setModal?: any;
}

export const AddPostForm = ({ className, setModal }:Props) => {
    const { t } = useTranslation();

    const {
        onSubmit,
        control,
        handleSubmit,
        register
    } = useAddPostForm();

    return (
        <>
            <div className={cls.modalHeader}>
                <CloseIcon
                    className={cls.modalClose}
                    onClick={() => setModal()}
                />
                <h2 className={cls.modalHeaderTitle}>Создать публикацию</h2>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={cls.modalForm}>
                <MultiLine
                    key="text"
                    name="text"
                    label=""
                    control={control}
                />
                <InputFile
                    key="file"
                    name="file"
                    control={control}
                    className={cls.fileInput}
                    register={register}
                />
                <Button
                    type="submit"
                    className="register-button text-capitalize fs-6 fw-bold pt-1 pb-1 ms-auto me-auto w-50"
                    size="small"
                    variant="contained"
                >
                    Публиковать
                </Button>
            </form>
        </>
    );
};
