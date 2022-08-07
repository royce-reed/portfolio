import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

export const fetchPublishedPosts = createAsyncThunk('blogs/fetchPublishedPosts', async () => {
  try {
    const response = await axios.get('api/blogs/published');
    return response.data; 
  } catch (error) {
    throw error;
  }
});


export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlog: (state, action) => {
      state.blog = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPublishedPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPublishedPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPublishedPosts.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  }
});

export const selectPublishedPosts = state => state.blog.posts;

export const { setBlog } = blogSlice.actions;
export default blogSlice.reducer;
