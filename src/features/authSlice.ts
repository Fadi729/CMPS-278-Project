import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../data/Interfaces/User";
import axios from "axios";
import ApiEndpoints from "../data/ApiEndpoints";
import { CredentialResponse, TokenResponse } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

export const LoginAsync = createAsyncThunk("auth/LoginAsync", async (token: TokenResponse, thunkAPI) => {
	try {
		const response = await axios.post<{ accessToken: string }>(`${ApiEndpoints.login}?token=${token.access_token}`);
		localStorage.setItem("token", response.data.accessToken);
        const jwtToken = jwtDecode<User>(response.data.accessToken);
        thunkAPI.dispatch(setUser(jwtToken));
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

interface State {
	user: User;
	isSignedIn: boolean;
}

const initialState: State = {
	user: {} as User,
	isSignedIn: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			state.isSignedIn = true;
		},
		signOut: (state) => {
			state.user = {} as User;
			state.isSignedIn = false;
			localStorage.removeItem("token");
		}
	},
});

export const { setUser, signOut } = authSlice.actions;

export default authSlice.reducer;
