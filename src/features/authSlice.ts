import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../data/Interfaces/User";
import axios from "axios";
import ApiEndpoints from "../data/ApiEndpoints";
import { CredentialResponse } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

export const LoginAsync = createAsyncThunk("auth/LoginAsync", async (token: CredentialResponse, thunkAPI) => {
	try {
		const response = await axios.post<{ accessToken: string }>(`${ApiEndpoints.login}?token=${token.credential}`);
        const jwtToken = jwtDecode<User>(response.data.accessToken);
        thunkAPI.dispatch(setUser(jwtToken));
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

interface State {
	user: User;
}

const initialState: State = {
	user: {} as User,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
