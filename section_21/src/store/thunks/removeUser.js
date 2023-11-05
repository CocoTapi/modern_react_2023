import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async(user) => {
    const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

    //fix this. "response.data" might not contain the information that your reducer needs to worl correctly
    //return response.data;

    return user;
})

export { removeUser };