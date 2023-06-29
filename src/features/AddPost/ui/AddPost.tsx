import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddPost.module.scss';

interface Props {
    className?: string;
    showModal: ()=>void;
}

export const AddPost = ({ className, showModal }:Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.AddPost, {}, [className])}>
            <img className={cls.AddPostAvatar} src="" alt="" />
            <div onClick={showModal} className={cls.AddPostArea}>Что у вас нового?</div>
        </div>
    );
};
