import { configureStore } from "@reduxjs/toolkit";
import { Applications, Games, Movies, Books, auth, WishList, History } from "./features/index";

export const store = configureStore({
	reducer: {
		Games,
		Applications,
		Movies,
		Books,
		auth,
		WishList,
		History,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
