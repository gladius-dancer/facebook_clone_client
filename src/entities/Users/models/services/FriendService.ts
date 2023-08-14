import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loaderActions } from 'shared/ui/PageLoader';
import { Notification } from 'shared/ui/Notifications/lib/Notification';
import {
    FamilliarService, friendRequestsActions, UnfriendService,
} from 'entities/Users';

import socket from 'shared/ui/Socket/Socket';
import { io } from 'socket.io-client';
import { CURRENT_USER_KEY } from 'shared/const/localstorage';
import { User } from '../types/UserSchema';
import { friendsActions } from '../slices/FriendSlice';

// const socket = io('http://localhost:7001');

export const FriendService = createAsyncThunk<User[]>(
    'friends',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.get(
                `${process.env.API_URL}/api/friends`,
                {
                    headers,
                    params: {
                        userId: JSON.parse(localStorage.getItem('user')).id,
                    },
                },
            );
            thunkAPI.dispatch(friendsActions.setUsers(response.data));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const FriendRequestService = createAsyncThunk<User[]>(
    'friendRequests',
    async (candidate, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.get(
                `${process.env.API_URL}/api/friend-requests`,
                {
                    headers,
                    params: {
                        id: JSON.parse(localStorage.getItem('user')).id,
                        candidate,

                    },
                },
            );
            thunkAPI.dispatch(friendRequestsActions.setUsers(response.data));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const FriendRequestsService = createAsyncThunk<User[]>(
    'friendsRequests',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.get(
                `${process.env.API_URL}/api/friend-requests`,
                {
                    headers,
                    params: {
                        id: JSON.parse(localStorage.getItem('user')).id,
                    },
                },
            );
            thunkAPI.dispatch(friendRequestsActions.setUsers(response.data));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const SendFriendRequestService = createAsyncThunk<User[], string>(
    'friendRequest',
    async (id, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.post(
                `${process.env.API_URL}/api/friend-request`,
                null,
                {
                    headers,
                    params: {
                        id: JSON.parse(localStorage.getItem('user')).id,
                        candidate: id,
                    },
                },
            );
            thunkAPI.dispatch(friendsActions.setUsers(response.data));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            thunkAPI.dispatch(FriendService());
            thunkAPI.dispatch(UnfriendService());
            thunkAPI.dispatch(FamilliarService());
            thunkAPI.dispatch(FriendRequestsService());
            socket.socket.emit(
                'sendNotification',
                {
                    senderId: JSON.parse(localStorage.getItem(CURRENT_USER_KEY))?.id,
                    receiverId: '64d66b2969e28f52c108b48b',
                    type: 'friendRequest',
                },
            );

            return response.data;
        } catch (e) {
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const AddToFriendService = createAsyncThunk<User[], string>(
    'addToFriend',
    async (candidate, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };
            const response = await axios.post(
                `${process.env.API_URL}/api/add-to-friend`,
                null,
                {
                    headers,
                    params: {
                        id: JSON.parse(localStorage.getItem('user')).id,
                        candidate,
                    },
                },
            );
            thunkAPI.dispatch(friendsActions.setUsers(response.data));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            thunkAPI.dispatch(FriendService());
            thunkAPI.dispatch(UnfriendService());
            thunkAPI.dispatch(FamilliarService());
            thunkAPI.dispatch(FriendRequestsService());
            return response.data;
        } catch (e) {
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const DeleteRequestService = createAsyncThunk<User[], string>(
    'deleteRequests',
    async (candidate, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.post(
                `${process.env.API_URL}/api/delete-friend-request`,
                null,
                {
                    headers,
                    params: {
                        id: JSON.parse(localStorage.getItem('user')).id,
                        candidate,

                    },
                },
            );
            thunkAPI.dispatch(friendsActions.setUsers(response.data));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const CancelRequestService = createAsyncThunk<User[], string>(
    'cancelRequests',
    async (candidate, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.post(
                `${process.env.API_URL}/api/cancel-friend-request`,
                null,
                {
                    headers,
                    params: {
                        id: JSON.parse(localStorage.getItem('user')).id,
                        candidate,

                    },
                },
            );
            thunkAPI.dispatch(friendsActions.setUsers(response.data));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);
