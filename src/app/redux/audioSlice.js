import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTrackId: null,
  currentTrackSrc: null,
  currentTrackType: null, // 'audio' or 'video'
  isPlaying: false,
};

const mediaSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.currentTrackId = action.payload.id;
      state.currentTrackSrc = action.payload.src;
      state.currentTrackType = action.payload.type;
      state.isPlaying = false; // Reset playing state on new track
    },
    playTrack: (state) => {
      state.isPlaying = true;
    },
    pauseTrack: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { setTrack, playTrack, pauseTrack } = mediaSlice.actions;
export default mediaSlice.reducer;
