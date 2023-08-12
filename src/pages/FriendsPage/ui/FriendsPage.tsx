import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import cls from 'pages/MainPage/ui/MainPage.module.scss';
import { LeftSidebar } from 'widgets/LeftSidebar';
import { Users } from 'entities/Users/ui/Users';
import { Unfriend } from 'entities/Unfriend/ui/Unfriend';
import { useDispatch, useSelector } from 'react-redux';
import {
    AddToFriendService,
    DeleteRequestService,
    familliars,
    friendRequests,
    unfriends,
} from 'entities/Users';
import { User, UserSchema } from 'entities/Users/models/types/UserSchema';
import { SendFriendRequestService } from 'entities/Users/models/services/FriendService';
import style from './FriendsPage.module.scss';

const FriendsPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const unfriendList = useSelector(unfriends);
    const familliarList = useSelector(familliars);
    const friendRequestList = useSelector(friendRequests);

    const addToFriend = (id: string) => {
        dispatch(AddToFriendService(id));
    };

    const deleteRequest = (id: string) => {
        dispatch(DeleteRequestService(id));
    };

    const sendFriendRequest = (id: string) => {
        dispatch(SendFriendRequestService(id));
    };

    return (
        <div>
            <Navbar />
            <div className={cls.MainPageBody}>
                <div className={cls.MainPageLeft}>
                    <LeftSidebar />
                </div>
                <div className={style.FriendsPageCenter}>
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
                    {(familliarList?.length > 0
                        || unfriendList?.length > 0)
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
                        {unfriendList?.map((user) => (
                            <Unfriend
                                key={user.id}
                                img={user.avatar}
                                ourFriends={[]}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                addToFriend={() => sendFriendRequest(user.id)}
                                deleteRequest={() => deleteRequest(user.id)}

                            />
                        ))}
                    </Users>
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
