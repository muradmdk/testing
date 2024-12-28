import { userRegisterApi } from "./web/userRegisterApiSlice";
import { artistRegisterApi } from "./web/ArtistRegisterApiSlice";
import { forgetPasswordApi } from "./web/ForgetPasswordApiSlice";
import { userLoginApi } from "./web/LoginApiSlice";
import { optApi } from "./web/OtpApiSlice";
import { ResetPasswordApi } from "./web/ResetPasswordApiSlice";
import { createAlbumApi } from "./artist/CreateAlbumApiSlice";
import { publicApi } from "./public/publicApiSlice";
import { songCrudApi } from "./artist/SongCrudApiSlice";

export const apiReducer = {
  // REACT QUERY REDUCER
  [userRegisterApi.reducerPath]: userRegisterApi.reducer,
  [artistRegisterApi.reducerPath]: artistRegisterApi.reducer,
  [forgetPasswordApi.reducerPath]: forgetPasswordApi.reducer,
  [userLoginApi.reducerPath]: userLoginApi.reducer,
  [optApi.reducerPath]: optApi.reducer,
  [ResetPasswordApi.reducerPath]: ResetPasswordApi.reducer,
  [publicApi.reducerPath]: publicApi.reducer,
  [songCrudApi.reducerPath]: songCrudApi.reducer,
  // ARTIST SIDE API

  [createAlbumApi.reducerPath]: createAlbumApi.reducer,
};

export const apiMiddleware = [
  userRegisterApi.middleware,
  artistRegisterApi.middleware,
  forgetPasswordApi.middleware,
  userLoginApi.middleware,
  optApi.middleware,
  ResetPasswordApi.middleware,
  createAlbumApi.middleware,
  publicApi.middleware,
  songCrudApi.middleware,
];
