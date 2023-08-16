import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
      //when you type this, they will run these function: 'song' + '/' + 'addSong' = 'song/addSong'
      addSong(state, action) {
        //state is only for this function, not big state object.
        state.push(action.payload);
      },
      // 'song' + '/' + 'removeSong' = 'song/removeSong'
      removeSong(state, action) {
        //action.payload === string, the song we want to remmove
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
      }
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      })
    }
  });

  export const { addSong, removeSong } = songsSlice.actions;
  export const songsReducer = songsSlice.reducer;