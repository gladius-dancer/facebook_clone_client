import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'app/providers/AuthProvider';
import { RegisterFormData } from 'pages/AuthPage/models/type/FormType';
import { loaderActions } from 'shared/ui/PageLoader';
import { Notification } from 'shared/ui/Notifications/lib/Notification';

export const registerService = createAsyncThunk<User, RegisterFormData, { rejectValue: string }>(
    'register',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const response = await axios.post<User>(`${process.env.API_URL}/api/register`, data);
            new Notification().showSuccess('UserSchema successfully registered!');
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            new Notification().showError(e.message);
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);
