import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthProviderSchema, User } from '../types/AuthProviderSchema';
import {AuthProviderService} from "app/providers/AuthProvider";

const initialState: AuthProviderSchema = {
    user: null,
    error: false,
    isLoading: false

};
export const authProviderSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state, action: PayloadAction<string>) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(AuthProviderService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(AuthProviderService.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(AuthProviderService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: authProviderActions } = authProviderSlice;
export const { reducer: authProviderReducer } = authProviderSlice;
