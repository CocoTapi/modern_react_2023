import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlices";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
});

export * from './thunks/fetchUsers';
//means find everything that gets exported from "./thunks/fetchUsers" file,
//and exported from the index.js file as well