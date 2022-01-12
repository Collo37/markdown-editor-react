import { configureStore } from "@reduxjs/toolkit";

import markdownSlice from "./markdownTextSlice";

const store = configureStore({
  reducer: {
    markdownText: markdownSlice,
  },
});

export default store;
