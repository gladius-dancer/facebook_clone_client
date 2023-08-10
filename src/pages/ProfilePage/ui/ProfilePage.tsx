import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CreateIcon from '@mui/icons-material/Create';
import { Navbar } from 'widgets/Navbar';
import IconButton from '@mui/material/IconButton';
import { AddAvatarForm } from 'widgets/AddAvatarForm';
import { ModalComponent } from 'shared/ui/ModalComponent/ui/ModalComponent';
import { useAddAvatar } from 'pages/ProfilePage/lib/useAddAvatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classnames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'app/providers/AuthProvider';
import styles from './ProfilePage.module.scss';

interface Props {
    className?: string;
}

export const ProfilePage = ({ className }:Props) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getIsAuth).user;
    const methods = useAddAvatar();

    return (
        <>
            <Navbar />
            <div className={classNames(styles.ProfilePage, {}, [className])}>
                <div className={styles.Container}>
                    <div className={styles.Banner}>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/006/852/804/original/
                            abstract-blue-background-simple-design-for-your-website-free-vector.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.Bottom}>
                        <div className={styles.AddBanner}>
                            <Button variant="contained" color="info" startIcon={<CameraAltIcon />}>Добавить фото обложки</Button>
                        </div>
                        <div className={styles.UserInfo}>
                            <div className={styles.UserInfoLeft}>
                                <div className={styles.UserAvatar}>
                                    <div className={styles.UserAvatarContent}>
                                        {isAuth?.avatar?.length > 0
                                            ? (
                                                <span className={styles.IconWrap}>
                                                    <img src={isAuth?.avatar} alt="" />
                                                </span>
                                            )
                                            : (
                                                <span className={styles.IconWrap}>
                                                    <AccountCircleIcon className={classnames(styles.TabIcon)} fontSize="medium" />
                                                </span>
                                            )}
                                    </div>
                                    <span className={styles.ChangeAvatar} onClick={methods.toggleAvatarModal}>
                                        <IconButton color="primary">
                                            <CameraAltIcon />
                                        </IconButton>
                                    </span>
                                </div>
                                <div className={styles.UserContent}>
                                    <h2>{`${isAuth?.firstName} ${isAuth?.lastName}`}</h2>
                                </div>
                            </div>

                            <div className={styles.UserEdit}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={(
                                        <CreateIcon />
                                    )}
                                >
                                    Редактировать профиль
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ModalComponent isOpen={methods.avatarModal} setModal={methods.toggleAvatarModal}>
                <AddAvatarForm methods={methods} filename={methods.fileName} />
            </ModalComponent>
        </>

    );
};
