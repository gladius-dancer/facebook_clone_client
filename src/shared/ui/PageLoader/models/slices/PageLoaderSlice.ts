import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    status: false,
};
export const pageLoaderSlice = createSlice({
    name: 'pageLoader',
    initialState,
    reducers: {
        onLoader: (state, action: PayloadAction<string>) => {
            state.status = true;
        },
        offLoader: (state, action: PayloadAction<string>) => {
            state.status = false;
        },
    },
});
export const { actions: loaderActions } = pageLoaderSlice;
export const { reducer: loaderReducer } = pageLoaderSlice;
