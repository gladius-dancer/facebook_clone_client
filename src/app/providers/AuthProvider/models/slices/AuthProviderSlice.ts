import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthProviderSchema } from '../types/AuthProviderSchema';

const initialState: AuthProviderSchema = {
    isAuthenticated: false,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
    },
});
export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
