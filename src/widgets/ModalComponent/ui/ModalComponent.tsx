import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import { ModalComponentType } from 'widgets/ModalComponent/type/ModalComponentType';
import cls from './ModalComponent.module.scss';

export const ModalComponent = ({ children, isOpen }: ModalComponentType) => {
    const { t } = useTranslation();

    return (
        <Modal
            isOpen={isOpen}
            className={cls.modalContent}
            overlayClassName={cls.modalBack}
        >
            {children}
        </Modal>
    );
};
