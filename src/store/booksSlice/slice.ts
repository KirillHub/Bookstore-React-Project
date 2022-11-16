import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from '../../backend/axios';

import { BooksSliceState, Status, TBooks } from './type';


export const fetchBooks = createAsyncThunk<TBooks>('books/fetchBooks', async () => {
	const { data } = await axios.get<TBooks>('/books');
	return data;
});

const initialState: BooksSliceState = {
	books: [],
	selectedBooks: [],
	status: Status.LOADING
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setSettingTest: (state, action) => {
			state.selectedBooks.push(action.payload)
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBooks.pending, (state) => {
			state.status = Status.LOADING;
		});
		builder.addCase(fetchBooks.fulfilled, (state, action) => {
			state.books = action.payload;
			state.status = Status.SUCCESS;
		});
		builder.addCase(fetchBooks.rejected, (state) => {
			state.status = Status.ERROR;
		});
	}
});

export const { setSettingTest } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;

