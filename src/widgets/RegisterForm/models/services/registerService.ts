import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { RegisterFormData } from 'widgets/RegisterForm/models/types/registerFormData';

export const registerService = createAsyncThunk<User, RegisterFormData, { rejectValue: string }>(
    'register',
    async (data, thunkAPI) => {
        try {
            console.log(data);

            const response = await axios.post<User>('https://facebook-server-sage.vercel.app/api/register', data);

            if (!response.data) {
                throw new Error();
            }
            // localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data.accessToken));
            // thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
