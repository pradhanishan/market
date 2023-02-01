import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IPopupSlice {
  show: boolean;
}

// Define the initial state using that type
const initialState: IPopupSlice = {
  show: false,
};

export const popupSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openPopup: (state) => {
      state.show = true;
    },
    closePopup: (state) => {
      state.show = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
