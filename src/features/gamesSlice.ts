import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Game } from "../data/Interfaces/Games";
import axios from "axios";
import ApiEndpoints from "../data/ApiEndpoints";

export const getGamesAsync = createAsyncThunk("games/getGamesAsync", async (_, thunkAPI) => {
	try {
		const response = await axios.get<Game[]>(ApiEndpoints.getGames);
		thunkAPI.dispatch(setGames(response.data));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

interface State {
	games: Game[];
	isLoading: boolean;
}

const initialState: State = {
	games: [] as Game[],
	isLoading: true,
};

const gamesSlice = createSlice({
	name: "Games",
	initialState,
	reducers: {
		setGames: (state, action: PayloadAction<Game[]>) => {
			state.games = action.payload;
			state.isLoading = false;
		},
	},
});

export const { setGames } = gamesSlice.actions;

export default gamesSlice.reducer;
