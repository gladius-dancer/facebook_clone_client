import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loaderActions } from 'shared/ui/PageLoader';
import { Notification } from 'shared/ui/Notifications/lib/Notification';
import { User } from '../types/UserSchema';
import { unfriendsActions } from '../slices/UnfriendSlice';

export const UnfriendService = createAsyncThunk<User[]>(
    'posts',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.get(
                `${process.env.API_URL}/api/unfriends`,
                {
                    headers,
                    params: {
                        userId: JSON.parse(localStorage.getItem('user')).id,
                    },
                },
            );
            thunkAPI.dispatch(unfriendsActions.setUsers(response.data));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);
