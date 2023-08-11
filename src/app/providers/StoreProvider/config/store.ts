import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loaderReducer } from 'shared/ui/PageLoader';
import { registerReducer } from 'widgets/RegisterForm';
import { loginReducer } from 'widgets/LoginForm';
import { authProviderReducer } from 'app/providers/AuthProvider';
import { postsReducer } from 'entities/Posts';
import {
    unfriendsReducer, friendsReducer, familliarsReducer, friendRequestsReducer,
} from 'entities/Users';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loader: loaderReducer,
        register: registerReducer,
        login: loginReducer,
        auth: authProviderReducer,
        posts: postsReducer,
        unfriends: unfriendsReducer,
        friends: friendsReducer,
        familliars: familliarsReducer,
        friendRequests: friendRequestsReducer,

    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
