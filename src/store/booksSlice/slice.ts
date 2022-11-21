import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from '../../backend/axios';

import { BooksSliceState, Status, TBooks } from './types';
import { RootState, useAppSelector } from '../store';


export const fetchBooks = createAsyncThunk<TBooks[]>('books/fetchBooks', async () => {
	const { data } = await axios.get<TBooks[]>('/books');
	return data;
});

const initialState: BooksSliceState = {
	books: [],
	booksSort: [],
	discountBooks: [],
	selectedBooks: [],
	status: Status.LOADING
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: { //! изменение данных в state (синхрон.)
		setSelectedBooks: (state, action) => {
			state.selectedBooks.push(action.payload)
		},

		setSortArrayOfBooks: (state, action) => {
			// state.test	action.payload
			/*
			! state.test - присваиваем полученные данные
			*/
			state.books = action.payload.slice(0, 2);
			//? action -> то, что передаём в функцию (данные с бэка)
		}
	},
	extraReducers: (builder) => { //! работа с бэком (асинх.)
		builder.addCase(fetchBooks.pending, (state) => {
			state.status = Status.LOADING;
		});
		builder.addCase(fetchBooks.fulfilled, (state, action) => {
			state.books = action.payload;
			state.booksSort = action.payload
				.filter(book =>
					!book.priceWithoutDiscount ? book : false)
				.sort((a, b) => +b?.id - +a?.id * Math.random())
				.slice(0, 15);
			state.discountBooks = action.payload.filter(book =>
				book.priceWithoutDiscount ? book : '')
				.sort((a, b) => +b?.id - +a?.id * Math.random())
			state.status = Status.SUCCESS;
		});
		builder.addCase(fetchBooks.rejected, (state) => {
			state.status = Status.ERROR;
		});
	}
});

export const { setSelectedBooks, setSortArrayOfBooks } = booksSlice.actions;

export const selectedBooks = (state: RootState) => state.booksList.books;

export const discountBooks = (state: RootState) => state.booksList.discountBooks;

export const sortedBooks = (state: RootState) => state.booksList.booksSort;

export const booksReducer = booksSlice.reducer;



