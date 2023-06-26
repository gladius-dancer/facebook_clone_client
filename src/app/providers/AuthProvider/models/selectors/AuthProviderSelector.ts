import { StateSchema } from 'app/providers/StoreProvider';

export const getIsAuth = (state: StateSchema) => state?.auth;
