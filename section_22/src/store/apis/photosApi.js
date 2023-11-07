import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                //providesTags

                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.albumId
                        },
                        method: 'GET'
                    }
                }                               
            }),
            addPhotos: builder.mutation({
                //invalidatesTags

                query: (album) => {
                    return {
                        method: 'POST',
                        url: '/photos',
                        body: {
                            albumId: album.id,
                            url: faker.image.abstract(150, 150, true)
                        }
                    }
                }
            }),
            removePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        method: 'DELETE',
                        url: `/photos/${photo.id}`
                    };
                },
            }),
        };
    }
});

export const {
    useFetchPhotosQuery,
    useAddPhotosMutation,
    useRemovePhotoMutation
} = photosApi;
export { photosApi };