import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CURRENT_USER_KEY, USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { loaderActions } from 'shared/ui/PageLoader';
import { Notification } from 'shared/ui/Notifications/lib/Notification';
import { LoginFormType } from 'widgets/LoginForm/models/types/loginSchema';

export const AuthProviderService = createAsyncThunk<LoginFormType, { rejectValue: string }>(
    'auth',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const response = await axios.get('https://facebook-server-sage.vercel.app/api/refresh');
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data.accessToken));
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(response.data.user));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            new Notification().showError(e.message);
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);
