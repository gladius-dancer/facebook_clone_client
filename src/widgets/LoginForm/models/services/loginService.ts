import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User} from 'app/providers/AuthProvider';
import {CURRENT_USER_KEY, USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage';
import {loaderActions} from 'shared/ui/PageLoader';
import {Notification} from 'shared/ui/Notifications/lib/Notification';
import {LoginSchema} from 'widgets/LoginForm/models/types/loginSchema';

export const loginService = createAsyncThunk<User, LoginSchema, { rejectValue: string }>(
    'login',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            // const response = await axios.post<User>('http://localhost:6060/api/login', data);
            const response = await axios.post<User>('https://facebook-server-sage.vercel.app/api/login', data);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data.accessToken));
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(response.data.user));
            new Notification().showSuccess('User successfully logined!');
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            new Notification().showError(e.message);
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);
