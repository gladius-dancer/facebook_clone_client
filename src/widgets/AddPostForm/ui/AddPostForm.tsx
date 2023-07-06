import { useTranslation } from 'react-i18next';
import cls from 'widgets/RegisterForm/ui/RegisterForm.module.scss';
import React from 'react';
import Button from '@mui/material/Button';
import { InputFile } from 'shared/ui/FormElements/InputFile/ui/InputFile';
import { MultiLine } from 'shared/ui/FormElements/Multiline/ui/MultiLine';

interface Props {
    className?: string;
    setModal?: any;
    methods: any
}

export const AddPostForm = ({ className, setModal, methods }:Props) => {
    const { t } = useTranslation();

    return (
        <>
            <div className={cls.modalHeader}>
                <h2 className={cls.modalHeaderTitle}>Создать публикацию</h2>
            </div>
            <form onSubmit={methods.handleSubmit(methods.onSubmit)} className={cls.modalForm}>
                <MultiLine
                    key="text"
                    name="text"
                    label=""
                    control={methods.control}
                    placeholder="Что у вас нового?"
                    className={cls.multiLine}
                />
                <InputFile
                    key="file"
                    name="file"
                    control={methods.control}
                    className={cls.fileInput}
                    register={methods.register}
                    fileName={methods.fileName}
                />
                <Button
                    type="submit"
                    className={cls.publishButton}
                    size="small"
                    variant="contained"
                >
                    Публиковать
                </Button>
            </form>
        </>
    );
};
