import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://inctagram.work/api/v1/' }),
    endpoints: (builder) => ({
        signup: builder.mutation<
            // Тип ответа (подправь под себя!)
            { message?: string },
            // Тип входных данных (поля формы)
            { userName: string; email: string; password: string; baseUrl: string }
        >({
            query: (body) => ({
                url: 'auth/registration',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useSignupMutation } = authApi;