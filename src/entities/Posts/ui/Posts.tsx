import { classNames } from 'shared/lib/classNames/classNames';
import { PostItem } from 'features/PostItem/ui/PostItem';
import { useSelector } from 'react-redux';
import { getPosts } from 'entities/Posts';
import { AddPost } from 'features/AddPost/ui/AddPost';
import { ModalComponent } from 'shared/ui/ModalComponent/ui/ModalComponent';
import { AddPostForm } from 'widgets/AddPostForm/ui/AddPostForm';
import { useAddPost } from 'entities/Posts/lig/useAddPosts';
import styles from './Posts.module.scss';

interface Props {
    className?: string;
}
export const Posts = ({ className }:Props) => {
    const posts = useSelector(getPosts);
    const methods = useAddPost();

    return (
        <div className={classNames(styles.Posts, {}, [className])}>
            <AddPost showModal={methods.toggleModal} />
            {posts.posts.map((post) => (
                <PostItem key={post._id} post={post} />
            ))}
            <ModalComponent
                isOpen={methods.modal}
                setModal={() => methods.toggleModal()}
            >
                <AddPostForm methods={methods} />
            </ModalComponent>
        </div>
    );
};
