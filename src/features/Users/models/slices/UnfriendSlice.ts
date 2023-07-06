import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/UserSchema';

const initialState: UserSchema = {
    error: false,
    loading: false,
    users: null,
};
export const unfriendsSlice = createSlice({
    name: 'unfriends',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        getUsers: (state) => state,
    },
});
export const { actions: unfriendsActions } = unfriendsSlice;
export const { reducer: unfriendsReducer } = unfriendsSlice;
