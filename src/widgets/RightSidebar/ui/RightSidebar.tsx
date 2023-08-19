import { classNames } from 'shared/lib/classNames/classNames';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { friends } from 'entities/Users';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import { MultiLine } from 'shared/ui/FormElements/Multiline/ui/MultiLine';
import { Chip, Stack } from '@mui/material';
import socket from 'shared/ui/Socket/Socket';
import { getIsAuth } from 'app/providers/AuthProvider';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cls from './RightSidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const RightSidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [chat, setChat] = useState(false);
    const [chatUser, setChatUser] = useState(null);
    const { t } = useTranslation();
    const currentUser = useSelector(getIsAuth).user;
    const contacts = useSelector(friends);
    const [history, setHistory] = useState([]);

    const schema = yup.object().shape({
        message: yup.string().required(),
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = methods;

    // const fileName = watch('file');

    const onSubmit = (data: any) => {
        socket.socket.emit('send_message', {
            message: data.message, userId: currentUser?.id, reciverId: chatUser?.id, __createdtime__: Date.now(),
        });
        console.log(data);
    };

    const openChat = (id: string) => {
        setChat(true);
        setChatUser(contacts?.filter((item) => item.id === id)[0]);
        socket.socket.emit('join_room', { userId: currentUser.id, reciverId: chatUser?.id });
    };

    const closeChat = () => {
        setChat(false);
        socket.socket.emit('leave_room', { userId: currentUser.id, reciverId: chatUser?.id });
    };

    useEffect(() => {
        socket.socket.on('receive_message', (data: any) => {
            console.log(data);
            setHistory((state) => [
                ...state,
                {
                    message: data.message,
                    username: data.username,
                    __createdtime__: data.__createdtime__,
                },
            ]);
        });

        // Remove event listener on component unmount
        return () => socket.socket.off('receive_message');
    }, [socket]);

    useEffect(() => {
        socket.socket.on('last_messages', (data: any) => setHistory(data));
    }, []);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <div className={cls.SidebarTitle}>
                    <h3>Contacts</h3>
                </div>
                <div className={cls.contactList}>
                    {contacts?.map((contact) => (
                        <div className={cls.contactItem} onClick={() => openChat(contact.id)}>
                            {contact?.avatar?.length > 0
                                ? (
                                    <span className={cls.IconWrap}>
                                        <img src={contact.avatar} alt="" />
                                    </span>
                                )
                                : (
                                    <span className={cls.IconWrap}>
                                        <AccountCircleIcon className={classnames(cls.TabIcon)} fontSize="medium" />
                                    </span>
                                )}
                            <span>{`${contact?.firstName} ${contact?.lastName}`}</span>
                        </div>
                    ))}
                </div>
                {chat && (
                    <div className={cls.chat}>
                        <span className={cls.close} onClick={closeChat}>
                            <IconButton><CloseIcon /></IconButton>
                        </span>
                        <div className={cls.chatTitle}>
                            {chatUser?.avatar?.length > 0
                                ? (
                                    <span className={cls.IconWrap}>
                                        <img src={chatUser?.avatar} alt="" />
                                    </span>
                                )
                                : (
                                    <span className={cls.IconWrap}>
                                        <AccountCircleIcon className={classnames(cls.TabIcon)} fontSize="medium" />
                                    </span>
                                )}
                            <span>{`${chatUser?.firstName} ${chatUser?.lastName}`}</span>
                        </div>
                        <div className={cls.chatArea}>
                            <div className={cls.messages}>
                                {history.map((message) => {
                                    if (message.userId === currentUser.id) {
                                        return (
                                            <Chip
                                                key={message.id}
                                                sx={{
                                                    height: 'auto',
                                                    width: '180px',
                                                    padding: '5px',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-end',
                                                    '& .MuiChip-label': {
                                                        display: 'block',
                                                        whiteSpace: 'normal',
                                                        alignSelf: 'flex-start',
                                                    },
                                                }}
                                                label={message.message}
                                                onClick={() => {
                                                }}
                                                onDelete={() => {
                                                }}
                                                deleteIcon={<span>08:00</span>}
                                                className={cls.friend}
                                            />
                                        );
                                    }
                                    if (message.userId !== currentUser.id) {
                                        return (
                                            <Chip
                                                key={message.id}
                                                sx={{
                                                    height: 'auto',
                                                    width: '180px',
                                                    padding: '5px',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-end',
                                                    '& .MuiChip-label': {
                                                        display: 'block',
                                                        whiteSpace: 'normal',
                                                    },
                                                }}
                                                label={message.message}
                                                onClick={() => {
                                                }}
                                                onDelete={() => {
                                                }}
                                                deleteIcon={(
                                                    <span>
                                                        <span>
                                                            09:00
                                                        </span>
                                                        <DoneIcon />
                                                    </span>

                                                )}
                                                className={cls.sender}
                                            />
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <div className={cls.sendForm}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <MultiLine control={control} name="message" size="small" maxRows={4} />
                                <IconButton type="submit"><SendIcon /></IconButton>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};
