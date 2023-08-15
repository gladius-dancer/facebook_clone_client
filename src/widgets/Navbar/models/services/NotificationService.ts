import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { notificationActions } from 'widgets/Navbar/models/slices/NotificationSlice';

export const NotificationService = createAsyncThunk(
    'notifications',
    async (data, thunkAPI) => {
        try {
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.get(
                `${process.env.API_URL}/api/notifications`,
                {
                    headers,
                    params: {
                        id: JSON.parse(localStorage.getItem('user')).id,
                    },
                },
            );
            thunkAPI.dispatch(notificationActions.setNotifications(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const DeleteNotificationService = createAsyncThunk<any, string>(
    'delete-notification',
    async (id, thunkAPI) => {
        try {
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.post(
                `${process.env.API_URL}/api/delete-notification`,
                null,
                {
                    headers,
                    params: {
                        id: JSON.parse(localStorage.getItem('user')).id,
                        notificationId: id,
                    },
                },
            );
            thunkAPI.dispatch(notificationActions.setNotifications(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
