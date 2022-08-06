import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../../../../utils/cookies";

interface IState {
   user: any;
   accessToken: string | null;
}

const initialState: IState = {
   user: getCookie("user") || null,
   accessToken: getCookie("accessToken") || null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setCredentials: (state, action) => {
         const { user, accessToken } = action.payload;
         console.log(action.payload);

         state.user = user;
         state.accessToken = accessToken;
         setCookie("accessToken", accessToken, 1);
         setCookie("user", user, 1);
      },
      logout: (state) => {
         state.user = null;
         state.accessToken = null;
         setCookie("accessToken", "", 0);
         setCookie("user", "", 0);
      },
   },
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;
