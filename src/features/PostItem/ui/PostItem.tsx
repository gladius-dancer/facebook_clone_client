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
                    <h3>User</h3>
                    <p>28.06.2023</p>
                </div>

            </div>
            <div className={cls.PostItemBody}>
                <p className={cls.PostItemBodyText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img src="" alt="" />
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
