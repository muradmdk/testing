import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('currentTrackState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn("Failed to load state from localStorage", error);
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify({
      currentTrackId: state.currentTrackId,
      currentTrack: state.currentTrack,
      isPlaying: state.isPlaying,
      isShuffle: state.isShuffle, 
    });
    localStorage.setItem('currentTrackState', serializedState);
  } catch (error) {
    console.warn("Failed to save state to localStorage", error);
  }
};

const initialState = loadStateFromLocalStorage() || {
  trackList: [],
  currentTrackId: null,
  isPlaying: false,
  currentTrack: null,
  isShuffle: false,
};

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    setTrackList: (state, action) => {
      state.trackList = action.payload;
    },
    loadTrack: (state, action) => {
      const trackIndex = action.payload;
      const track = state.trackList[trackIndex];
      if (track) {
        if (state.currentTrackId === track.id) {
          console.log("Track is the same, no restart.");
        } else {
          console.log("Track has changed, restarting audio player.");
        }
        if (state.currentTrackId === track.id) {
          state.currentTrack = null;
        }

        state.currentTrackId = track.id;
        state.currentTrack = track;
        state.isPlaying = true;
        saveStateToLocalStorage(state);
      }
    },
    togglePlayPause: (state, action) => {
      state.isPlaying = action.payload;
      saveStateToLocalStorage(state);
    },
    playNextTrack: (state) => {
      if (state.currentTrackId !== null) {
        const currentIndex = state.trackList.findIndex(
          (track) => track.id === state.currentTrackId
        );
        if (currentIndex !== -1) {
          let nextTrack;

          if (state.isShuffle) {
            const randomIndex = Math.floor(Math.random() * state.trackList.length);
            nextTrack = state.trackList[randomIndex];
          } else {
            const nextIndex = (currentIndex + 1) % state.trackList.length;
            nextTrack = state.trackList[nextIndex];
          }
          if (nextTrack) {
            state.currentTrackId = nextTrack.id;
            state.currentTrack = nextTrack;
            state.isPlaying = true;
            saveStateToLocalStorage(state);
          }
        }
      }
    },
    shuffleTracks: (state) => {
      state.isShuffle = !state.isShuffle;
      saveStateToLocalStorage(state);
    },
  },
});

export const { 
  setTrackList, 
  loadTrack, 
  togglePlayPause, 
  playNextTrack, 
  shuffleTracks
} = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
