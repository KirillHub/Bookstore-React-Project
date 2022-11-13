import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from '../../backend/axios';

import { BookSliceState, Status, TBooks } from './type';


export const fetchBooks = createAsyncThunk<TBooks>('books/fetchBooks', async () => {
	const { data } = await axios.get<TBooks>('/books');
	return data;
});

const initialState: BookSliceState = {
	books: [],
	selectedBooks: [],
	status: Status.LOADING
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		settingTest: (state, action) => {
			console.log('we here');
			console.log(action.payload);
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

export const { settingTest } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;


