import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loaderReducer } from 'shared/ui/PageLoader';
import { registerReducer } from 'widgets/RegisterForm';
import { loginReducer } from 'widgets/LoginForm';
import { authReducer } from 'app/providers/AuthProvider';
import { postsReducer } from 'features/Posts';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loader: loaderReducer,
        register: registerReducer,
        login: loginReducer,
        auth: authReducer,
        posts: postsReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
