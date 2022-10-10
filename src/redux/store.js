import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./UserSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: UserSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
