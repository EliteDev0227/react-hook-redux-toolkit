import { configureStore } from "@reduxjs/toolkit";
import counterReduer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReduer
  },
})