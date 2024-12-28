import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiReducer, apiMiddleware } from "./ApiController";
import { authReducer } from "./authSlice";
import { persistReducer,persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import audioPlayerReducer from "./audioPlayerSlice";
import audioReducer from "./audioSlice";
import mediaReducer from "./mediaSlice";
import sampleReducer from "./samplePlayerSlice";


const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState", "token", "user"],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), 
   // NORMAL REDUCER
    audioPlayer: audioPlayerReducer,
    audio: audioReducer,
    media: mediaReducer,
    sampleAudio: sampleReducer,
  ...apiReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }).concat(apiMiddleware),
});

// Persistor
export const persistor = persistStore(store);
