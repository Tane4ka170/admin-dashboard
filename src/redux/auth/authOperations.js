import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://admin-dashboard-back.onrender.com/api';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  '/user/register',
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/register', userDetails);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authenticateUser = createAsyncThunk(
  '/user/login',
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/login', userDetails);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOutUser = createAsyncThunk(
  '/user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/user/logout');
      clearAuthToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  '/user/user-info',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const storedToken = state.auth.token;

    if (storedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthToken(storedToken);
      const { data } = await axios.get('/user/user-info');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
