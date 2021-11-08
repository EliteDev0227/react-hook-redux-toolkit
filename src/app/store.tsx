import { configureStore } from "@reduxjs/toolkit";
import counterReduer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReduer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;