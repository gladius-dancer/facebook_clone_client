import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationSchema, NotificationType } from 'widgets/Navbar/models/types/NotificationType';

const initialState: NotificationSchema = {
    notifications: [],
};
export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotifications: (state, action: PayloadAction<NotificationType[]>) => {
            state.notifications = action.payload;
        },
    },
});
export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
