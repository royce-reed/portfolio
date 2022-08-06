import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice.js';
import blogReducer from './features/blogSlice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    blog: blogReducer,
  },
  // middleware: [...getDefaultMiddleware()],
});


