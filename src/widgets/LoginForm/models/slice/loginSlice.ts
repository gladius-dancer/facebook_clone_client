import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginService } from '../services/loginService';

const initialState: LoginSchema = {
    isLoading: false,
    user: { email: null, id: null },
    message: null,
    error: null,
};
export const loginSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<LoginSchema>) => {
            state.user = action.payload.user;
        },
        logout: (state, action: PayloadAction<string>) => {

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
