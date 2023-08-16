import { configureStore } from "@reduxjs/toolkit";
import { reset } from './actions';
import { addMovie, removeMovie, moviesReducer } from "./slices/moviesSlice";
import { addSong, removeSong, songsReducer } from "./slices/songsSlice";


const store = configureStore({
  reducer: {
    //this reducer is a big reducer
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, addMovie, removeMovie, addSong, removeSong };

//actionns mean action creater
// console.log(songsSlice.actions.addSong());

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(
//     songsSlice.actions.addSong('Some Song')
//   );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
