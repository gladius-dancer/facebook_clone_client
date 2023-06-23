import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loaderReducer } from 'shared/ui/PageLoader';
import { registerReducer } from 'widgets/RegisterForm';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loader: loaderReducer,
        register: registerReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
