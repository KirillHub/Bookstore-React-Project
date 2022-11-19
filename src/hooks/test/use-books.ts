export { }
/*
import { useEffect, useState, useRef, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { sortedBooks } from '../../store/booksSlice/slice';
import { fetchBooks } from '../../store/booksSlice/slice';


export const useSortedBook = () => {
	const dispatch = useAppDispatch(); //! ничего не получает. отправляет action.payload
	const booksList = useAppSelector(state => state.booksList.books);  // получен фулл массив с книгами
	const booksSort = useAppSelector(state => state.booksList.booksSort);  // отсортированный массив в extraReducers(builder => state.booksSort = action.payload.sort())
	const selectedBooks = useAppSelector(state => state.booksList.selectedBooks); // объявленный пустой массив, в который будут динамически при клике пушиться книги, при клике "Добaвит в корзину"
	const sortedBooksArray = useAppSelector(sortedBooks);

	return useMemo(() => ({ sortedBooksArray }), [sortedBooksArray])
};

*/