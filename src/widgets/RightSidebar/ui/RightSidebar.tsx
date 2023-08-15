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
import { useSendMessage } from 'widgets/Navbar/lib/useSendMessage';
import { Chip, Stack } from '@mui/material';
import cls from './RightSidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const RightSidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [chat, setChat] = useState(false);
    const [chatUser, setChatUser] = useState(null);
    const { t } = useTranslation();
    const contacts = useSelector(friends);

    const { control, onSubmit, handleSubmit } = useSendMessage();
    const openChat = (id: string) => {
        setChat(true);
        setChatUser(contacts?.filter((item) => item.id === id)[0]);
    };

    useEffect(() => {

    }, [chatUser]);

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
                        <span className={cls.close} onClick={() => setChat(false)}>
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
                                <Chip
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
                                    label="Custom delete icon"
                                    onClick={() => {}}
                                    onDelete={() => {}}
                                    deleteIcon={<span>08:00</span>}
                                    className={cls.friend}
                                />
                                <Chip
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
                                    label="Custom delete iconsdfhgsdgsdgsd gsdgdsgsdgsdgsdgs ,sdgdsgsdgsdg dgsdgsdgsdgsd"
                                    onClick={() => {}}
                                    onDelete={() => {}}
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
