import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiEndpoints from "../data/ApiEndpoints";
import axios from "axios";
import { History, HistoryItem } from "../data/Interfaces/History";

export const getHistoryAsync = createAsyncThunk("History/getHistoryAsync", async (_, thunkAPI) => {
	try {
		const response = await axios.get(ApiEndpoints.history, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		thunkAPI.dispatch(setHistory(response.data));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const addItemToHistoryAsync = createAsyncThunk("History/addItemToHistoryAsync", async (itemToAdd: HistoryItem, thunkAPI) => {
	try {
		const response = await axios.post(ApiEndpoints.history, itemToAdd, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		thunkAPI.dispatch(addItemToHistory(itemToAdd));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const deleteItemFromHistoryAsync = createAsyncThunk("History/deleteItemFromHistoryAsync", async (itemId: string, thunkAPI) => {
	try {
		const response = await axios.delete(`${ApiEndpoints.history}?itemId=${itemId}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		thunkAPI.dispatch(removeItemFromHistory(itemId));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

interface State {
	history: History;
	isLoading: boolean;
}

const initialState: State = {
	history: {} as History,
	isLoading: true,
};

const historySlice = createSlice({
	name: "History",
	initialState,
	reducers: {
		setHistory: (state, action: PayloadAction<History>) => {
			state.history = action.payload;
			state.isLoading = false;
		},
		addItemToHistory: (state, action: PayloadAction<HistoryItem>) => {
			state.history.items.push(action.payload);
		},
		removeItemFromHistory: (state, action: PayloadAction<string>) => {
			state.history.items = state.history.items.filter((item) => item.itemId !== action.payload);
		},
	},
});

export const { setHistory, addItemToHistory, removeItemFromHistory } = historySlice.actions;

export default historySlice.reducer;
