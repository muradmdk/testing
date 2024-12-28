import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authState: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload.authState;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.authState = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { setAuthState, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
