import Modal from 'react-modal';
import { ModalComponentType } from 'shared/ui/ModalComponent/type/ModalComponentType';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import cls from './ModalComponent.module.scss';

export const ModalComponent = ({ children, isOpen, setModal }: ModalComponentType) => (
    <Modal
        isOpen={isOpen}
        className={cls.modalContent}
        overlayClassName={cls.modalBack}
    >
        <IconButton className={cls.modalClose} onClick={() => setModal()}>
            <CloseIcon />
        </IconButton>

        {children}
    </Modal>
);
