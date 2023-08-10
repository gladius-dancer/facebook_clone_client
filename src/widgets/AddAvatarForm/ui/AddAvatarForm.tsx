import { useTranslation } from 'react-i18next';
import cls from 'widgets/RegisterForm/ui/RegisterForm.module.scss';
import React from 'react';
import Button from '@mui/material/Button';
import { InputFile } from 'shared/ui/FormElements/InputFile/ui/InputFile';

interface Props {
    className?: string;
    setModal?: any;
    methods: any;
    filename: any;
}

export const AddAvatarForm = ({
    className, setModal, methods, filename,
}:Props) => {
    const { t } = useTranslation();

    return (
        <>
            <div className={cls.modalHeader}>
                <h2 className={cls.modalHeaderTitle}>Изменить изображение</h2>
            </div>
            <form onSubmit={methods.handleSubmit(methods.onSubmit)} className={cls.modalForm}>
                <InputFile
                    key="file"
                    name="file"
                    control={methods.control}
                    className={cls.fileInput}
                    register={methods.register}
                    fileName={filename}
                />
                <Button
                    type="submit"
                    className={cls.publishButton}
                    size="small"
                    variant="contained"
                >
                    Сохранить
                </Button>
            </form>
        </>
    );
};
