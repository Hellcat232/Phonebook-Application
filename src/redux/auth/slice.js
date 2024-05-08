import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.user.name = null;
        state.user.email = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = action.payload.token;
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.user.email = null;
        state.user.name = null;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoggedIn = false;
        state.user.email = null;
        state.user.name = null;
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = action.payload.token;
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user.email = null;
        state.user.name = null;
        state.isRefreshing = false;
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.user.name = null;
        state.user.email = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.user.name = null;
        state.user.email = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.user.email = null;
        state.user.name = null;
      })
      .addCase(refreshUser.pending, (state, action) => {})
      .addCase(refreshUser.fulfilled, (state, action) => {})
      .addCase(refreshUser.rejected, (state, action) => {});
  },
});

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"],
};

const persistedAuth = persistReducer(persistConfig, authSlice.reducer);

export const authReducer = persistedAuth;
