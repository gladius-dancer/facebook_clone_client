import { classNames } from 'shared/lib/classNames/classNames';
import React, { useEffect, useRef, useState } from 'react';
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
    const [history, setHistory] = useState({});
    const chatOuter = useRef<HTMLDivElement | null>(null);
    const chatInner = useRef<HTMLDivElement | null>(null);

    const schema = yup.object().shape({
        message: yup.string().required(),
    });

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = methods;

    const onSubmit = (data: any) => {
        socket.socket.emit('send_message', {
            message: data.message,
            userId: currentUser?.id,
            reciverId: chatUser?.id,
            __createdTime__: Date.now(),
        });
        reset();
    };

    const openChat = async (id: string) => {
        await setChat(true);
        const user = await contacts?.filter((item) => item.id === id);
        setChatUser(user[0]);
        socket.socket.emit('join_room', {
            userId: currentUser.id,
            reciverId: user[0]?.id,
        });
    };

    const closeChat = () => {
        setChat(false);
        socket.socket.emit('leave_room', {
            userId: currentUser.id,
            reciverId: chatUser?.id,
        });
    };

    const scrollBottom = () => {
        const outerDivHeight = chatOuter.current?.clientHeight;
        const innerDivHeight = chatInner.current?.clientHeight;
        chatOuter.current?.scrollTo({
            top: innerDivHeight! - outerDivHeight!,
            left: 0,
            behavior: 'smooth',
        });
    };

    const groupMessages = (array: any, property: any) => array.reduce((groups: any, item: any) => {
        const name = item[property];
        const group = groups[name] || (groups[name] = []);
        group.push(item);
        return groups;
    }, { });

    useEffect(() => {
        socket.socket.on('receive_message', (data: any) => {
            setHistory((state) => {
                if (Object.keys(state)[Object.keys(state).length - 1] === new Date(data.__createdTime__).toLocaleDateString()) {
                    // @ts-ignore
                    state[Object.keys(state)[Object.keys(state).length - 1]].push({
                        message: data.message,
                        username: data.userId,
                        __createdTime__: new Date(data.__createdTime__).toLocaleTimeString(
                            navigator.language,
                            { hour: '2-digit', minute: '2-digit' },
                        ),
                        __createdDate__: new Date(data.__createdTime__).toLocaleDateString(),

                    });
                    return { ...state };
                }

                const group = new Date(data.__createdTime__).toLocaleDateString();
                return {
                    ...state,
                    [group]: [{
                        message: data.message,
                        username: data.userId,
                        __createdTime__: new Date(data.__createdTime__).toLocaleTimeString(
                            navigator.language,
                            { hour: '2-digit', minute: '2-digit' },
                        ),
                        __createdDate__: new Date(data.__createdTime__).toLocaleDateString(),
                    }],
                };
            });
        });
        // Remove event listener on component unmount
        return () => socket.socket.off('receive_message');
    }, []);

    useEffect(() => {
        scrollBottom();
    }, [history]);

    useEffect(() => {
        socket.socket.on('last_messages', (data: any) => {
            const groups = groupMessages(data, '__createdDate__');
            setHistory(groups);
        });
    }, []);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.items}>
                <div className={cls.SidebarTitle}>
                    <h3>Contacts</h3>
                </div>
                <div className={cls.contactList}>
                    {contacts?.map((contact) => (
                        <div
                            className={cls.contactItem}
                            onClick={() => openChat(contact.id)}
                        >
                            {contact?.avatar?.length > 0 ? (
                                <span className={cls.IconWrap}>
                                    <img src={contact.avatar} alt="" />
                                </span>
                            ) : (
                                <span className={cls.IconWrap}>
                                    <AccountCircleIcon
                                        className={classnames(cls.TabIcon)}
                                        fontSize="medium"
                                    />
                                </span>
                            )}
                            <span>{`${contact?.firstName} ${contact?.lastName}`}</span>
                        </div>
                    ))}
                </div>
                {chat && (
                    <div className={cls.chat}>
                        <span className={cls.close} onClick={closeChat}>
                            <IconButton>
                                <CloseIcon />
                            </IconButton>
                        </span>
                        <div className={cls.chatTitle}>
                            {chatUser?.avatar?.length > 0 ? (
                                <span className={cls.IconWrap}>
                                    <img src={chatUser?.avatar} alt="" />
                                </span>
                            ) : (
                                <span className={cls.IconWrap}>
                                    <AccountCircleIcon
                                        className={classnames(cls.TabIcon)}
                                        fontSize="medium"
                                    />
                                </span>
                            )}
                            <span>{`${chatUser?.firstName} ${chatUser?.lastName}`}</span>
                        </div>
                        <div className={cls.chatArea} ref={chatOuter}>
                            <div className={cls.messages} ref={chatInner}>
                                {Object.entries(history)?.map((item:any) => (
                                    <>
                                        <p className={cls.divider}>{item[0]}</p>
                                        { item[1]?.map((message: any) => {
                                            if (message.username !== currentUser.id) {
                                                return (
                                                    <Chip
                                                        key={message.id}
                                                        sx={{
                                                            height: 'auto',
                                                            width: '220px',
                                                            padding: '5px',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-end',
                                                            overflowWrap: 'break-word',
                                                            '& .MuiChip-label': {
                                                                display: 'block',
                                                                whiteSpace: 'normal',
                                                                alignSelf: 'flex-start',
                                                            },
                                                        }}
                                                        label={message.message}
                                                        onClick={() => {}}
                                                        onDelete={() => {}}
                                                        deleteIcon={(
                                                            <span>
                                                                { message.__createdTime__ }
                                                            </span>
                                                        )}
                                                        className={cls.friend}
                                                    />
                                                );
                                            }
                                            if (message.username === currentUser.id) {
                                                return (
                                                    <Chip
                                                        key={message.id}
                                                        sx={{
                                                            height: 'auto',
                                                            width: '220px',
                                                            padding: '5px',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-end',
                                                            overflowWrap: 'break-word',
                                                            '& .MuiChip-label': {
                                                                display: 'block',
                                                                whiteSpace: 'normal',
                                                                overflowWrap: 'anywhere',
                                                            },
                                                        }}
                                                        label={message.message}
                                                        onClick={() => {}}
                                                        onDelete={() => {}}
                                                        deleteIcon={(
                                                            <span>
                                                                <span>
                                                                    { message.__createdTime__ }
                                                                </span>
                                                                <DoneIcon />
                                                            </span>
                                                        )}
                                                        className={cls.sender}
                                                    />
                                                );
                                            }
                                        })}
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className={cls.sendForm}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <MultiLine
                                    control={control}
                                    name="message"
                                    size="small"
                                    maxRows={4}
                                    className={cls.chatText}
                                />
                                <IconButton type="submit">
                                    <SendIcon />
                                </IconButton>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
