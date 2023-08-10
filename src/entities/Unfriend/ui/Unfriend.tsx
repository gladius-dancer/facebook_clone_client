import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from '@mui/material/Button';
import cls from './Unfriend.module.scss';

interface Props {
    className?: string,
    firstName: string,
    lastName: string,
    img: string,
    ourFriends: any[]
}

export const Unfriend = ({
    className,
    firstName,
    lastName,
    img,
    ourFriends,
}:Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Unfriend, {}, [className])}>
            <div className={cls.Image}>
                <img src={img} alt="" />
            </div>
            <div className={cls.Body}>
                <h4>
                    {firstName}
                    {' '}
                    {lastName}
                </h4>
                <p>{ourFriends}</p>
                <Button variant="contained">Добавить</Button>
                <Button>Удалить</Button>
            </div>

        </div>
    );
};
