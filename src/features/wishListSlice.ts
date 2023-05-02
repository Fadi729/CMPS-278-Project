import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WishList, WishListItem } from "../data/Interfaces/WishList";
import ApiEndpoints from "../data/ApiEndpoints";
import axios from "axios";

export const getWishListAsync = createAsyncThunk("WishList/getWishListAsync", async (_, thunkAPI) => {
	try {
		const response = await axios.get(ApiEndpoints.wishlist, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		thunkAPI.dispatch(setWishList(response.data));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const addItemToWishListAsync = createAsyncThunk("WishList/addItemToWishListAsync", async (itemToAdd: WishListItem, thunkAPI) => {
	try {
		const response = await axios.post(ApiEndpoints.wishlist, itemToAdd, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		thunkAPI.dispatch(addItemToWishList(itemToAdd));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const deleteItemFromWishListAsync = createAsyncThunk("WishList/deleteItemFromWishListAsync", async (itemId: string, thunkAPI) => {
	try {
		const response = await axios.delete(`${ApiEndpoints.wishlist}?itemId=${itemId}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		thunkAPI.dispatch(removeItemFromWishList(itemId));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

interface State {
	wishList: WishList;
	isLoading: boolean;
}

const initialState: State = {
	wishList: {} as WishList,
	isLoading: true,
};

const wishListSlice = createSlice({
	name: "WishList",
	initialState,
	reducers: {
		setWishList: (state, action: PayloadAction<WishList>) => {
			state.wishList = action.payload;
			state.isLoading = false;
		},
		addItemToWishList: (state, action: PayloadAction<WishListItem>) => {
			state.wishList.items.push(action.payload);
		},
		removeItemFromWishList: (state, action: PayloadAction<string>) => {
			state.wishList.items = state.wishList.items.filter((item) => item.itemId !== action.payload);
		},
	},
});

export const { setWishList, addItemToWishList, removeItemFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
