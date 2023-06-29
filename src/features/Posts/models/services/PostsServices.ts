import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loaderActions } from 'shared/ui/PageLoader';
import { Notification } from 'shared/ui/Notifications/lib/Notification';
import { PostSchema } from '../types/PostSchema';
import { postsActions } from '../slices/PostSlice';

export const PostsService = createAsyncThunk<PostSchema[]>(
    'posts',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.onOffLoader(true));
            const headers = {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };

            const response = await axios.get(
                'https://facebook-server-sage.vercel.app/api/posts',
                {
                    headers,
                    params: {
                        userId: JSON.parse(localStorage.getItem('user')).id,
                    },
                },
            );
            thunkAPI.dispatch(postsActions.setPosts({ posts: response.data }));
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return response.data;
        } catch (e) {
            new Notification().showError(e.message);
            thunkAPI.dispatch(loaderActions.onOffLoader(false));
            return thunkAPI.rejectWithValue('error');
        }
    },
);
