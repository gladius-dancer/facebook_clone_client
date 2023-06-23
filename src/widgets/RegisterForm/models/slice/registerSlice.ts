import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterSchema } from '../types/registerSchema';
import { registerService } from '../services/registerService';

const initialState: RegisterSchema = {
    isLoading: false,
    error: null,
};
export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
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

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
