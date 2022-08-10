import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setCredentials, logout } from "../modules/auth/pages/login/authSlice";
import { COOKIES, setCookie } from "../utils/cookies";

const baseQuery = fetchBaseQuery({
   baseUrl: "https://jwt-auth-zeta.vercel.app/",
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

   // const error = result.error.originalStatus;

   const error = result?.error as any;

   if (error?.originalStatus === 403) {
      //send refresh token and get new access token

      const refreshResult = await baseQuery("/refresh", api, extraOptions);

      console.log("result", refreshResult);
      // dispatch action refresh
      // catch endpoint fullfil of action refresh and update access to store
      if (refreshResult?.data) {
         console.log(refreshResult?.data);
         const auth = api.getState().auth;

         //store the new token
         const data = { ...(refreshResult?.data as Record<string, unknown>) };
         console.log(data);
         const { accessToken } = data;

         api.dispatch(
            setCredentials({
               ...auth,
               ...data,
            })
         );

         setCookie(COOKIES.ACCESS_TOKEN, <string>accessToken, 1);

         //retry the original query with new access token
         result = await baseQuery(args, api, extraOptions);
         console.log(result);
      } else {
         api.dispatch(logout());
      }
   }

   return result;
};

export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: baseQueryWithReauth,
   tagTypes: ["User"],
   endpoints: (builder) => ({}),
});
