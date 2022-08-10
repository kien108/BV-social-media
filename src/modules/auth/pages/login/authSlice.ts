import { createSlice } from "@reduxjs/toolkit";
import { COOKIES, getCookie, setCookie } from "../../../../utils/cookies";
import { LOCAL_STORAGE, removeLocalStorage, setLocalStorage } from "../../../../utils/localstorage";

export interface IAuthRes {
   accessToken: string | null;
   refreshToken: string | null;
   _id: string;
   role: string;
}

const initialState: IAuthRes = {
   accessToken: getCookie(COOKIES.ACCESS_TOKEN) || null,
   refreshToken: getCookie(COOKIES.REFRESH_TOKEN) || null,
   _id: getCookie(COOKIES._ID) || "",
   role: getCookie(COOKIES.ROLE) || "",
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setCredentials: (state, action) => {
         const { accessToken, refreshToken, _id, role } = action.payload;

         state.accessToken = accessToken;
         state.refreshToken = refreshToken;
         state._id = _id;
         state.role = role;

         setCookie(COOKIES.ACCESS_TOKEN, accessToken, 1);
         setCookie(COOKIES.REFRESH_TOKEN, refreshToken, 1);
         setCookie(COOKIES._ID, _id, 1);
         setCookie(COOKIES.ROLE, role, 1);
      },
      logout: (state) => {
         state.accessToken = null;
         state.refreshToken = null;
         state._id = "";
         state.role = "";

         setCookie(COOKIES.ACCESS_TOKEN, "", 0);
         setCookie(COOKIES.REFRESH_TOKEN, "", 0);
         setCookie(COOKIES._ID, "", 0);
         setCookie(COOKIES.ROLE, "", 0);
         removeLocalStorage(LOCAL_STORAGE.USER);
      },
   },
});

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions;
