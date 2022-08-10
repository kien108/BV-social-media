import { apiSlice } from "./../../../services/apiSlice";

export interface User {
   username: string;
   password: string;
   email: string;
   _id: string;
   role: string;
}

export const usersApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getUser: builder.query<User, string>({
         query: (_id) => `/users/${_id}`,
         providesTags: (result, error, args) =>
            result ? [{ type: "User", id: result._id }] : ["User"],
      }),
      getUsers: builder.query<User[], void>({
         query: () => "/users",
         providesTags: (result, error, args) =>
            result
               ? [...result.map(({ _id }) => ({ type: "User" as const, id: _id })), "User"]
               : ["User"],
         keepUnusedDataFor: 5,
      }),
   }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApiSlice;
