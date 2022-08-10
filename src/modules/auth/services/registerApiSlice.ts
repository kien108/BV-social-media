import { apiSlice } from "../../../services/apiSlice";

export interface RegisterParams {
   user: string;
   pwd: string;
   confirmPwd: string;
   email: string;
}
export const registerApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      register: builder.mutation<any, RegisterParams>({
         query: (data) => ({
            method: "POST",
            url: "/register",
            body: data,
         }),
         invalidatesTags: ["User"],
      }),
   }),
});

export const { useRegisterMutation } = registerApiSlice;
