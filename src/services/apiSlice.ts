import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";
import { setCredentials, logout } from "../modules/auth/pages/login/authSlice";
import { setCookie } from "../utils/cookies";

const baseQuery = fetchBaseQuery({
   baseUrl: "http://localhost:3500",
   credentials: "include",
   prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.accessToken;

      if (token) {
         headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
   },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
   let result = await baseQuery(args, api, extraOptions);

   if (result?.error?.status === 403) {
      //send refresh token and get new access token

      const refreshResult = await baseQuery("/refresh", api, extraOptions);

      if (refreshResult?.data) {
         const user = api.getState().auth.user;

         //store the new token

         const data = { ...(refreshResult?.data as Record<string, unknown>) };
         const { token } = data;

         api.dispatch(
            setCredentials({
               ...data,
               user,
            })
         );

         setCookie("accessToken", <string>token, 1);

         //retry the original query with new access token
         result = await baseQuery(args, api, extraOptions);
      } else {
         api.dispatch(logout());
      }
   }

   return result;
};

export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: baseQueryWithReauth,
   endpoints: (builer) => ({}),
});
