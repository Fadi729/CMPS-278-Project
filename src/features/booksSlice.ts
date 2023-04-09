import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BooksData, BooksDataAPIResponse } from "../data/Books";
import axios from "axios";
import ApiEndpoints from "../data/ApiEndpoints";

export const getBooksAsync = createAsyncThunk("books/getBooksAsync", async (_, thunkAPI) => {
	try {
		const response = await axios.get<BooksDataAPIResponse[]>(ApiEndpoints.getBooks);
		const books = response.data.map(convertBook);
		thunkAPI.dispatch(setBooks(books));
		return books;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

function convertBook(book: BooksDataAPIResponse) {
	return { ...book, authors: book.authors !== null ? eval(book.authors) : null } as BooksData;
}

interface State {
	books: BooksData[];
}

const initialState: State = {
	books: [] as BooksData[],
};

const booksSlice = createSlice({
	name: "Books",
	initialState,
	reducers: {
		setBooks: (state, action: PayloadAction<BooksData[]>) => {
			state.books = action.payload;
		},
	},
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
