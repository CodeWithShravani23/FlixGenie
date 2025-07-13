import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import genieReducer from "./genieSlice";
import loginReducer from "./loginSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    genie: genieReducer,
    login: loginReducer,
  },
});

export default appStore;
