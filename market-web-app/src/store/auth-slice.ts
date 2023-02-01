import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IAuthSlice {
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: IAuthSlice = {
  isLoggedIn:
    localStorage.getItem("accessToken") === undefined || localStorage.getItem("accessToken") === null ? false : true,
};

export const authSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    rtkLogin: (state) => {
      state.isLoggedIn = true;
    },
    rtkLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { rtkLogin, rtkLogout } = authSlice.actions;

export default authSlice.reducer;
