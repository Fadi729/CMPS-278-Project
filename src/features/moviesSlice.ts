import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiEndpoints from "../data/ApiEndpoints";
import Movie from "../data/Interfaces/Movies";

export const getMoviesAsync = createAsyncThunk("movies/fetchMovies", async (_, thunkAPI) => {
	try {
		const response = await axios.get<Movie[]>(ApiEndpoints.getMovies);
		thunkAPI.dispatch(setMovies(response.data));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

interface State {
	movies: Movie[];
	isLoading: boolean;
}

const initialState: State = {
	movies: [] as Movie[],
	isLoading: true,
};

const moviesSlice = createSlice({
	name: "Movies",
	initialState,
	reducers: {
		setMovies: (state, action: PayloadAction<Movie[]>) => {
			state.movies = action.payload;
			state.isLoading = false;
		},
	},
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
