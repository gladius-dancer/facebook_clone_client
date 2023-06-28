import { StateSchema } from 'app/providers/StoreProvider';

export const getPosts = (state: StateSchema) => state.posts;
