// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export const authApi = createApi({
//     reducerPath: "authApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/auth" }),
//     tagTypes: ["authApi"],
//     endpoints: (builder) => {
//         return {
//             register: builder.mutation({
//                 // query: userData=> {
//                     return {
//                         url: "/register",
//                         method: "POST",
//                         body:userData
//                     }
//                 },
//                 providesTags: ["authApi"]
//             }),
//                 login: builder.mutation({
//                 query: userData => {
//                     return {
//                         url: "/login",
//                         method: "POST",
//                         body:userData
//                     }
//                 },
//                 providesTags: ["authApi"]
//             }),
//             logout: builder.mutation({
//                 query: userData => {
//                     return {
//                         url: "/logout",
//                         method: "POST",
                        
//                     }
//                 },
//                 providesTags: ["authapi"]
//             }),
           
        
//         }
//     }
// })

// export const {  useLoginMutation,useLogoutMutation,useRegisterMutation  } = authApi
