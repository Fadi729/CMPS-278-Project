import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/moviesSlice";
import booksSlice from "./features/booksSlice";
import gamesSlice from "./features/gamesSlice";

export const store = configureStore({
	reducer: {
		Movies: moviesSlice,
		Books: booksSlice,
		Games: gamesSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
