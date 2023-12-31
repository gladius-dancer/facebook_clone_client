import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/UserSchema';

const initialState: UserSchema = {
    error: false,
    loading: false,
    users: null,
};
export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        getUsers: (state) => state,
    },
});
export const { actions: friendsActions } = friendsSlice;
export const { reducer: friendsReducer } = friendsSlice;
