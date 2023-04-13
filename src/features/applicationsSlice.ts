import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Application } from "../data/Interfaces/Applications";
import axios from "axios";
import ApiEndpoints from "../data/ApiEndpoints";

export const getApplicationAsync = createAsyncThunk("applications/getApplicationAsync", async (_, thunkAPI) => {
	try {
		const response = await axios.get<Application[]>(ApiEndpoints.getApplications);
		thunkAPI.dispatch(setApplications(response.data));
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

interface State {
	applications: Application[];
}

const initialState: State = {
	applications: [] as Application[],
};

const applicationsSlice = createSlice({
	name: "Applications",
	initialState,
	reducers: {
		setApplications: (state, action: PayloadAction<Application[]>) => {
			state.applications = action.payload;
		},
	},
});

export const { setApplications } = applicationsSlice.actions;

export default applicationsSlice.reducer;
