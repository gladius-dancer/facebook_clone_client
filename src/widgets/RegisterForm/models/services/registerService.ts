import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'app/providers/AuthProvider';
import { RegisterFormData } from 'widgets/RegisterForm/models/types/registerFormData';
import { loaderActions } from 'shared/ui/PageLoader';
import { Notification } from 'shared/ui/Notifications/lib/Notification';

export const registerService = createAsyncThunk<User, RegisterFormData, { rejectValue: string }>(
    'register',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const response = await axios.post<User>('https://facebook-server-sage.vercel.app/api/register', data);
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
