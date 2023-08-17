import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Btn, ButtonTheme } from 'shared/ui/Button/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { Post, postsActions } from 'entities/Posts';
import socket from 'shared/ui/Socket/Socket';
import { CURRENT_USER_KEY } from 'shared/const/localstorage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from 'app/providers/AuthProvider';
import { notificationActions } from 'widgets/Navbar/models/slices/NotificationSlice';
import { date } from 'yup';
import cls from './PostItem.module.scss';

interface Props {
    className?: string;
    post: Post
}

export const PostItem = ({ className, post }: Props) => {
    const { t } = useTranslation();
    const currentUser = useSelector(getIsAuth)?.user;
    const dispatch = useDispatch();

    const like = (id: string, user: string) => {
        socket.socket.emit(
            'likePost',
            {
                userId: JSON.parse(localStorage.getItem(CURRENT_USER_KEY))?.id,
                receiverId: user,
                postId: id,
                type: 'like',
            },
        );
    };

    useEffect(() => {
        socket.socket.on('getLike', (data: any) => {
            if (data?.status) {
                dispatch(postsActions.likePost(data));
            } else {
                dispatch(postsActions.unlikePost(data));
            }
        });
    }, [socket]);

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
                {
                    post.type === 'video/mp4'
                        /* eslint-disable jsx-a11y/media-has-caption */
                        ? <video className={cls.PostMedia} src={post.pathToFile} controls />
                        : <img className={cls.PostMedia} src={post.pathToFile} alt="" />
                }
                <div className={cls.PostItemButtons}>
                    {post.likes.includes(currentUser?.id) ? (
                        <div onClick={() => like(post._id, post.user._id.toString())}>
                            <Btn theme={ButtonTheme.CLEAR} className={cls.Like}>
                                <ThumbUpAltIcon />
                                Нравится
                            </Btn>
                        </div>
                    )
                        : (
                            <div onClick={() => like(post._id, post.user._id.toString())}>
                                <Btn theme={ButtonTheme.CLEAR}>
                                    <ThumbUpOffAltIcon />
                                    Нравится
                                </Btn>
                            </div>
                        )}

                    <li>
                        <Btn theme={ButtonTheme.CLEAR}>
                            <CommentIcon />
                            Комментировать
                        </Btn>
                    </li>
                </div>
            </div>
        </div>
    );
};
