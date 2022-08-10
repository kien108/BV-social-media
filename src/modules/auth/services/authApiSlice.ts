import { apiSlice } from "../../../services/apiSlice";
import { IAuthRes } from "../pages/login/authSlice";

export interface LoginParams {
   user: string;
   pwd: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      login: builder.mutation<IAuthRes, LoginParams>({
         query: (credentials) => ({
            url: "/auth",
            method: "POST",
            body: credentials,
         }),
      }),
   }),
});

export const { useLoginMutation } = authApiSlice;
