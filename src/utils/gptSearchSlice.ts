import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    searchToggle: false,
  },
  reducers: {
    toggleGPTSearchBar: (state) => {
      state.searchToggle = !state.searchToggle;
    },
  },
});

export const { toggleGPTSearchBar } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;