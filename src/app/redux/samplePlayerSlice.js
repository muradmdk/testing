// Redux Slice (audioSlice.js)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTrackId: null,
  currentTrackSrc: null,
  playing: false,
};

const audioSlice = createSlice({
  name: "sampleAudio",
  initialState,
  reducers: {
    playTrack: (state, action) => {
      const { trackId, trackSrc } = action.payload;
      if (state.currentTrackId !== trackId) {
        state.currentTrackId = trackId;
        state.currentTrackSrc = trackSrc;
      }
      state.playing = true;
    },
    stopTrack: (state) => {
      state.playing = false;
    },
  },
});

export const { playTrack, stopTrack } = audioSlice.actions;
export default audioSlice.reducer;