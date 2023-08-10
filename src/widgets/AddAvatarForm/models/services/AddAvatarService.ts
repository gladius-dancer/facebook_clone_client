import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loaderActions } from 'shared/ui/PageLoader';
import { Notification } from 'shared/ui/Notifications/lib/Notification';
import { AddAvatarSchema } from 'widgets/AddAvatarForm';

export const AddAvatarService = createAsyncThunk<AddAvatarSchema, FormData, { rejectValue: string }>(
    'addAvatar',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const response = await axios.post(
                `${process.env.API_URL}/api/add-avatar`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                        'Content-Type': 'multipart/form-data',
                    },
                    params: {
                        userId: JSON.parse(localStorage.getItem('user')).id,
                    },
                },
            );
            new Notification().showSuccess('Avatar successfully added!');
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch
        (e) {
            new Notification().showError(e.message);
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    }
    ,
);
