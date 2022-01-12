import { createSlice } from "@reduxjs/toolkit";

const markdownInputSlice = createSlice({
  name: "markdown",
  initialState: {
    text: "",
  },
  reducers: {
    updateMarkdown(state, action) {
      state.text = action.payload.markdownText;
    },
  },
});

export const { updateMarkdown } = markdownInputSlice.actions;
export default markdownInputSlice.reducer;
