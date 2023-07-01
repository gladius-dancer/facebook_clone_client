import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loaderActions } from 'shared/ui/PageLoader';
import { Notification } from 'shared/ui/Notifications/lib/Notification';
import { AddPostSchema } from 'widgets/AddPostForm';

export const AddPostService = createAsyncThunk<AddPostSchema, FormData , { rejectValue: string }>(
    'addPost',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const response = await axios.post(
                // 'https://facebook-server-sage.vercel.app/api/add-post',
                'http://localhost:6060/api/add-post',
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
            new Notification().showSuccess('Post successfully added!');
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
