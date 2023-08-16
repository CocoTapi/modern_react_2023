import { configureStore, createSlice } from "@reduxjs/toolkit";

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
  }
});

const store = configureStore({
  reducer: {
    //this reducer is a big reducer
    songs: songsSlice.reducer
  }
});

export { store };
export const { addSong } = songsSlice.actions;


//actionns mean action creater
// console.log(songsSlice.actions.addSong());

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(
//     songsSlice.actions.addSong('Some Song')
//   );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
