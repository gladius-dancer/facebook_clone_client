import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { PostItem } from 'features/PostItem/ui/PostItem';
import { useSelector } from 'react-redux';
import { getPosts } from 'features/Posts';
import { Post } from 'features/Posts/models/types/PostSchema';
import styles from './Posts.module.scss';

interface Props {
    className?: string;
}
export const Posts = ({ className }:Props) => {
    const { t } = useTranslation();
    const posts = useSelector(getPosts);

    return (
        <div className={classNames(styles.Posts, {}, [className])}>
            {posts.posts.map((post) => (
                <PostItem key={post.post_id} post={post} />
            ))}
        </div>
    );
};
