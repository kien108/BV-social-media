import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/pages/login/authSlice";
import userReducer from "../modules/user/redux/userSlice";

import { apiSlice } from "../services/apiSlice";

const store = configureStore({
   reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      user: userReducer,
      auth: authReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
   devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
