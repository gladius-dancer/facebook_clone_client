import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    status: false,
};
export const pageLoaderSlice = createSlice({
    name: 'pageLoader',
    initialState,
    reducers: {
        onOffLoader: (state, action: PayloadAction<boolean>) => {
            state.status = action.payload;
        },
    },
});
export const { actions: loaderActions } = pageLoaderSlice;
export const { reducer: loaderReducer } = pageLoaderSlice;
