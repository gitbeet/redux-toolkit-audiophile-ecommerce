import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import db, { auth } from "../../config/firebase";

interface StateInterface {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: StateInterface = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      password,
      fullName,
    }: { email: string; password: string; fullName: string },
    thunkAPI
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (!auth.currentUser || !auth.currentUser.uid) return;
      await updateProfile(auth.currentUser, { displayName: fullName });
      return await setDoc(doc(db, "shoppingCart", auth.currentUser.uid), {});
      // FIX ANY
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

// Signout user
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload as string;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload as string;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload as string;
      });
  },
});

export const { reset, setUser } = userSlice.actions;

export default userSlice.reducer;
