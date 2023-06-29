import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { PostItem } from 'features/PostItem/ui/PostItem';
import { useSelector } from 'react-redux';
import { getPosts } from 'features/Posts';
import { AddPost } from 'features/AddPost/ui/AddPost';
import { ModalComponent } from 'widgets/ModalComponent/ui/ModalComponent';
import { useState } from 'react';
import { AddPostForm } from 'widgets/AddPostForm/ui/AddPostForm';
import styles from './Posts.module.scss';

interface Props {
    className?: string;

}
export const Posts = ({ className }:Props) => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const posts = useSelector(getPosts);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className={classNames(styles.Posts, {}, [className])}>
            <AddPost showModal={toggleModal} />
            {posts.posts.map((post) => (
                <PostItem key={post.post_id} post={post} />
            ))}
            <ModalComponent isOpen={modal}><AddPostForm setModal={() => toggleModal()} /></ModalComponent>
        </div>
    );
};
