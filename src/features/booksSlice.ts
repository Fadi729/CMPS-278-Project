import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiEndpoints from "../data/ApiEndpoints";
import { BooksDataAPIResponse, BooksData,BooksReview } from "../data/Interfaces/Books";

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

export const getBookReviewsAsync = createAsyncThunk(
	"books/getBookReviewsAsync",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<BooksReview[]>(ApiEndpoints.getReviews);
			const bookReviews = response.data;
			thunkAPI.dispatch(setBookReviews(bookReviews));
			return bookReviews;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

function convertBook(book: BooksDataAPIResponse) {
	return { ...book, authors: book.authors !== null ? eval(book.authors) : null } as BooksData;
}

interface State {
	books: BooksData[];
	bookReviews: BooksReview[];
	isLoading: boolean;
}

const initialState: State = {
	books: [] as BooksData[],
	bookReviews: [] as BooksReview[],
	isLoading: true,

};

const booksSlice = createSlice({
	name: "Books",
	initialState,
	reducers: {
		setBooks: (state, action: PayloadAction<BooksData[]>) => {
			state.books = action.payload;
			state.isLoading = false;
		},
		setBookReviews: (state, action: PayloadAction<BooksReview[]>) => {
			state.bookReviews = action.payload;
		}
	},
});

export const { setBooks, setBookReviews } = booksSlice.actions;

export default booksSlice.reducer;
