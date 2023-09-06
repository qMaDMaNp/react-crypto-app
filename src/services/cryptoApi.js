import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Key': 'eaa5894924msh4e49b6ff125c5d3p111eefjsn8b8944a4b7fc',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers });


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (count) => createRequest(`coins?limit=${count}`),
            transformResponse: (response) => {
                console.log(response);
                return response.data
            }
        }),
    })
});

export const {
    useGetCoinsQuery
} = cryptoApi;
