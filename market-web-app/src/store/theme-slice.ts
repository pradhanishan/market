import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IThemeSliceState {
  darkMode: boolean;
}

// Define the initial state using that type
const initialState: IThemeSliceState = {
  darkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
