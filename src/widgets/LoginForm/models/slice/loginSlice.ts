import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema, User } from '../types/loginSchema';
import { loginService } from '../services/loginService';

const initialState: LoginSchema = {
    isLoading: false,
    user: null,
    error: null,
};
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state, action: PayloadAction<string>) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginService.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
