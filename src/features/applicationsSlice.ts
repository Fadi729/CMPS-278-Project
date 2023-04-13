import { createSlice } from "@reduxjs/toolkit";
import { Application } from "../data/Interfaces/Applications";

interface State {
	applications: Application[];
}

const initialState: State = {
	applications: [] as Application[],
};

const applicationsSlice = createSlice({
	name: "Applications",
	initialState,
	reducers: {},
});

export const {} = applicationsSlice.actions;

export default applicationsSlice.reducer;
