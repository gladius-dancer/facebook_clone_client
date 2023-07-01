import { useTranslation } from 'react-i18next';
import cls from 'widgets/RegisterForm/ui/RegisterForm.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import Button from '@mui/material/Button';
import { useAddPostForm } from 'widgets/AddPostForm/lib/useAddPostForm';
import { InputFile } from 'shared/ui/FormElements/InputFile/ui/InputFile';
import { MultiLine } from 'shared/ui/FormElements/Multiline/ui/MultiLine';
import IconButton from "@mui/material/IconButton";

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
        register,
        watch,
        fileName
    } = useAddPostForm();

    return (
        <>
            <div className={cls.modalHeader}>
                <IconButton className={cls.modalClose}>
                    <CloseIcon
                        onClick={() => setModal()}
                    />
                </IconButton>

                <h2 className={cls.modalHeaderTitle}>Создать публикацию</h2>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={cls.modalForm}>
                <MultiLine
                    key="text"
                    name="text"
                    label=""
                    control={control}
                    placeholder="Что у вас нового?"
                    className={cls.multiLine}
                />
                <InputFile
                    key="file"
                    name="file"
                    control={control}
                    className={cls.fileInput}
                    register={register}
                    fileName = {fileName}
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
