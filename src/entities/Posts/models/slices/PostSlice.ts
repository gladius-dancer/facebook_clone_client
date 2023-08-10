import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostSchema, Post } from '../types/PostSchema';

const initialState: PostSchema = {
    posts: [],
};
export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<PostSchema>) => {
            state.posts = action.payload.posts;
        },
        getPosts: (state) => state,
    },
});
export const { actions: postsActions } = postSlice;
export const { reducer: postsReducer } = postSlice;
