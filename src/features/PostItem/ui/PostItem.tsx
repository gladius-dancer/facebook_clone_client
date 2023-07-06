import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Btn, ButtonTheme } from 'shared/ui/Button/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { Post } from 'features/Posts';
import cls from './PostItem.module.scss';

interface Props {
    className?: string;
    post: Post
}
export const PostItem = ({ className, post }: Props) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PostItem, {}, [className])}>
            <div className={cls.PostItemHeader}>
                <img src="" alt="" />
                <img src="" alt="" />
                <div className={cls.PostItemHeaderInner}>
                    <h3>{post.user.firstName}</h3>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span> в </span>
                    <span>{new Date(post.date).toLocaleTimeString()}</span>
                </div>
            </div>
            <div className={cls.PostItemBody}>
                <p className={cls.PostItemBodyText}>
                    {post.text}
                </p>

                {/* { */}
                {/*    post.type === 'video/mp4' */}
                {/*        ? <video className={cls.PostMedia} src={post.pathToFile} controls /> */}
                {/*        : <img className={cls.PostMedia} src={post.pathToFile} alt="" /> */}
                {/* } */}
                <ul className={cls.PostItemButtons}>
                    <li>
                        <Btn theme={ButtonTheme.CLEAR} className={cls.Like}>
                            <ThumbUpAltIcon />
                            Нравится
                        </Btn>
                    </li>
                    <li>
                        <Btn theme={ButtonTheme.CLEAR}>
                            <ThumbUpOffAltIcon />
                            Нравится
                        </Btn>
                    </li>
                    <li>
                        <Btn theme={ButtonTheme.CLEAR}>
                            <CommentIcon />
                            Комментировать
                        </Btn>
                    </li>
                </ul>
            </div>
        </div>
    );
};
