import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        'https://backend.webmotech.com/api/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        }
      );

      console.log(response);

      if (!response.ok) {
        return rejectWithValue(new Error('Username or password is incorrect!'));
      }

      const { data } = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Something went wrong. Please try again!');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (registerData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        'https://backend.webmotech.com/api/user/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerData),
        }
      );

      if (!response.ok) {
        return rejectWithValue(new Error('Username or password is incorrect!'));
      }

      const { data } = await response.json();

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Something went wrong. Please try again!');
    }
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
