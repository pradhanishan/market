import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IPopupSlice {
  show: boolean;
  title: string;
  message: string;
}

// Define the initial state using that type
const initialState: IPopupSlice = {
  show: false,
  title: "",
  message: "",
};

export const popupSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<{ title: string; message: string }>) => {
      state.show = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
    closePopup: (state) => {
      state.show = false;
      state.title = "";
      state.message = "";
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
