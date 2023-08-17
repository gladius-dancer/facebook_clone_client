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
        likePost: (state, action: any) => {
            state.posts.map((post) => {
                if (post._id === action.payload.postId) {
                    post.likes.push(action.payload.userId);
                }
            });
        },

        unlikePost: (state, action: any) => {
            state.posts.map((post) => {
                if (post._id === action.payload.postId) {
                    post.likes = post.likes.filter((item) => item !== action.payload.userId);
                }
            });
        },
        getPosts: (state) => state,
    },
});
export const { actions: postsActions } = postSlice;
export const { reducer: postsReducer } = postSlice;
