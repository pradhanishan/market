import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IThemeSliceState {
  darkMode: boolean;
}

// Define the initial state using that type
const initialState: IThemeSliceState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = true;
    },
    toggleLightMode: (state) => {
      state.darkMode = false;
    },
  },
});

export const { toggleDarkMode, toggleLightMode } = themeSlice.actions;

export default themeSlice.reducer;
