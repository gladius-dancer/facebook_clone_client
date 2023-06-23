import { StateSchema } from 'app/providers/StoreProvider';

export const getPageLoader = (state: StateSchema) => state.loader.status;
