import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import cls from 'pages/MainPage/ui/MainPage.module.scss';
import { Users } from 'entities/Users/ui/Users';
import { Unfriend } from 'entities/Unfriend/ui/Unfriend';
import { useDispatch, useSelector } from 'react-redux';
import {
    AddToFriendService, DeleteRequestService, familliars, friendRequests, friends,
} from 'entities/Users';
import { User } from 'entities/Users/models/types/UserSchema';
import { SendFriendRequestService } from 'entities/Users/models/services/FriendService';
import { RightSidebar } from 'widgets/RightSidebar/ui/RightSidebar';
import { FriendsLeftSidebar } from 'widgets/FriendsLeftSidebar/ui/FriendsLeftSidebar';
import style from './FriendsPage.module.scss';

const FriendsPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const friendsList = useSelector(friends);
    const familliarList = useSelector(familliars);
    const friendRequestList = useSelector(friendRequests);
    const [type, setType] = useState('friends');

    const addToFriend = (id: string) => {
        dispatch(AddToFriendService(id));
    };

    const deleteRequest = (id: string) => {
        dispatch(DeleteRequestService(id));
    };

    const sendFriendRequest = (id: string) => {
        dispatch(SendFriendRequestService(id));
    };

    const ChangeType = (type: string) => {
        setType(type);
    };

    return (
        <div>
            <Navbar />
            <div className={cls.MainPageBody}>
                <div className={cls.MainPageLeft}>
                    <FriendsLeftSidebar changeType={ChangeType} />
                </div>
                <div className={style.FriendsPageCenter}>
                    {type === 'friends' && (
                        <>
                            {friendsList?.length > 0 && <h2 className={style.Header}>Друзья</h2>}
                            {friendsList?.length > 0
                                && (
                                    <Users>
                                        {friendRequestList?.map((user) => (
                                            <Unfriend
                                                key={user.id}
                                                img={user.avatar}
                                                ourFriends={[]}
                                                firstName={user.firstName}
                                                lastName={user.lastName}
                                                addToFriend={() => addToFriend(user.id)}
                                                deleteRequest={() => deleteRequest(user.id)}
                                            />
                                        ))}
                                    </Users>
                                )}
                        </>
                    )}

                    {type === 'requests' && (
                        <>
                            {friendRequestList?.length > 0 && <h2 className={style.Header}>Запросы на добавление в друзья</h2>}
                            {friendRequestList?.length > 0
                                && (
                                    <Users>
                                        {friendRequestList?.map((user) => (
                                            <Unfriend
                                                key={user.id}
                                                img={user.avatar}
                                                ourFriends={[]}
                                                firstName={user.firstName}
                                                lastName={user.lastName}
                                                addToFriend={() => addToFriend(user.id)}
                                                deleteRequest={() => deleteRequest(user.id)}
                                            />
                                        ))}
                                    </Users>
                                )}
                        </>
                    )}

                    {type === 'requests' && (
                        <>
                            {familliarList?.length > 0
                                && <h2 className={style.Header}>Люди, которых вы можете знать</h2> }
                            <Users>
                                {familliarList?.map((familliar: User) => (
                                    <Unfriend
                                        key={familliar.id}
                                        img={familliar.avatar}
                                        ourFriends={[]}
                                        firstName={familliar.firstName}
                                        lastName={familliar.lastName}
                                        addToFriend={() => sendFriendRequest(familliar.id)}
                                        // deleteRequest={() => deleteFromFamilliar(familliar.id)}
                                        deleteRequest={() => {}}
                                    />
                                ))}
                            </Users>
                        </>
                    )}
                </div>
                <div className={cls.MainPageRight}>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
