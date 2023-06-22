import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormType } from '../types/loginSchema';
import { registerService } from '../services/registerService';

const initialState: LoginFormType = {
    isLoading: false,
    user: { email: null, id: null },
    message: null,
    error: null,
};
export const loginSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerService.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(registerService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registerActions } = loginSlice;
export const { reducer: registerReducer } = loginSlice;
