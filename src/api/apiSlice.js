// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { setCredentials, logOut } from '../features/authSlice'

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://localhost:6001',
//     credentials: 'include',
//     prepareHeaders: (headers, {getState}) => {
//         const token = getState().auth.token
//         if(token) {
//             headers.set('Authorization', `Bearer ${token}`)
//         }
//         return headers
//     }
// })

// const baseQueryAuth = async (args, api, extraOptions) => {
// let result = await baseQuery (args, api, extraOptions)

// if(result?.error.originalStatus === 403){
//     console.log('send refresh token')

//     const refreshResult = await baseQuery('/login', api, extraOptions)
//     if(refreshResult?.data){
//         const user = api.getState().auth.user
        
//         api.dispatch(setCredentials({...refreshResult.data, user}))
//         result = await baseQuery(args, api, extraOptions)
//     } else {
//         api.dispatch(logOut());
//     }
// }
// return result

// }

// export const apiSlice = createApi({
//     baseQuery: baseQueryAuth,
//     endpoints: builder => ({})
// })