import { useEffect, useState } from 'react';
import { BookDescr } from './BookRatingPrise/BookRatingPrise';
import './Book.scss';
import BookCart from './BookCart/BookCart';

import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchBooks, settingTest } from '../store/bookSlice/slice';
import { TBooks } from '../store/bookSlice/type';

const Book = () => {

	const dispatch = useAppDispatch();
	const books = useAppSelector((state) => state.booksList);


	useEffect(() => {
		dispatch(fetchBooks())
	}, []);


	return (
		<div className='book book-block'>

			{
				books?.books?.map((book: TBooks) =>
					<div className='book__card'
						key={book.id}>
						<img
							className='book__img'
							src={book.imageUrl}
						/>

						<BookDescr price={book.price} rating={book.bookRating} />

						<div
							className='book__name'>
							{book.bookName}
						</div>

						<div
							className='book__author-name'>
							{book.authorName}
						</div>

						<BookCart takeProduct={book} />
					</div>
				)
			}

		</div>
	);

};


export default Book;


