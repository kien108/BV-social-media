import { LOCAL_STORAGE } from "../../../utils/localstorage";
import getLocalStorage from "../../../utils/localstorage/getLocalStorage";
import setLocalStorage from "../../../utils/localstorage/setLocalStorage";

import { createSlice } from "@reduxjs/toolkit";

import { usersApiSlice, User } from "../services/userApiSlice";

const initialState: User = getLocalStorage(LOCAL_STORAGE.USER) || {};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addMatcher(usersApiSlice.endpoints.getUser.matchFulfilled, (state, action) => {
         state = action.payload;

         setLocalStorage(LOCAL_STORAGE.USER, action.payload);
      });
   },
});

export default userSlice.reducer;
