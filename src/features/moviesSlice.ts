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

export const postMoviesAsync =createAsyncThunk("movies/postMovies", async (data: Movie, thunkAPI) => {
	try {
		//const response = await axios.post(ApiEndpoints.getMovies, data);
		thunkAPI.dispatch(addMovie(data));
		//return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const putMoviesAsync =createAsyncThunk("movies/putMovies", async (data, thunkAPI) => {
	try {
		const response = await axios.put<Movie[]>(ApiEndpoints.getMovies, data);
		thunkAPI.dispatch(setMovies(response.data));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const deleteMoviesAsync =createAsyncThunk("movies/deleteMovies", async (ID: number, thunkAPI) => {
	try {
		const response = await axios.delete(ApiEndpoints.getMovies+"/"+ID);
		thunkAPI.dispatch(deleteMovie(ID));
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
		addMovie: (state, action: PayloadAction<Movie>) => {
			state.movies.push(action.payload)
		},
		deleteMovie: (state, action: PayloadAction<number>) => {
			state.movies=state.movies.filter((movie) => movie.id !== action.payload)
		}
	},
});

export const { setMovies, addMovie, deleteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
