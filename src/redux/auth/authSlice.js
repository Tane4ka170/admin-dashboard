import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  authenticateUser,
  getUserInfo,
  registerUser,
  signOutUser,
} from './authOperations';

const initialState = {
  user: {
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const pending = state => {
  state.loading = true;
  state.error = '';
};
const rejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signOutUser.fulfilled, state => {
        state.user = { email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(getUserInfo.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(getUserInfo.rejected, state => {
        state.isLoading = false;
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(registerUser.fulfilled, authenticateUser.fulfilled),
        (state, { payload }) => {
          state.user = payload;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.pending,
          authenticateUser.pending,
          signOutUser.pending
        ),
        pending
      )

      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          authenticateUser.rejected,
          signOutUser.rejected
        ),
        rejected
      );
  },
});

export const authReducer = authSlice.reducer;
