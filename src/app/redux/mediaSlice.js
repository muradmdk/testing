// redux/slices/mediaSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentFeed: null, // This will hold the current feed object (src, id, type)
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setCurrentFeed: (state, action) => {
      state.currentFeed = action.payload;
    },
    clearCurrentFeed: (state) => {
      state.currentFeed = null; // Clear the current feed when no media is playing
    },
  },
});

export const { setCurrentFeed, clearCurrentFeed } = mediaSlice.actions;
export const selectCurrentFeed = (state) => state.media.currentFeed;
export default mediaSlice.reducer;
