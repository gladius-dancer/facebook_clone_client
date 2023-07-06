import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from '@mui/material/Button';
import cls from './Unfriend.module.scss';

interface Props {
    className?: string;
}

export const Unfriend = ({ className }:Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Unfriend, {}, [className])}>
            <div className={cls.Image}>
                <img src="" alt="" />
            </div>
            <div className={cls.Body}>
                <h4>Header</h4>
                <p>sub header</p>
                <Button variant="contained">Добавить</Button>
                <Button>Удалить</Button>
            </div>

        </div>
    );
};
