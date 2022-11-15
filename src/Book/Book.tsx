import { useEffect, useState } from 'react';
import { BookDescr } from './BookRatingPrise/BookRatingPrise';
import './Book.scss';

import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchBooks } from '../store/bookSlice/slice';
import { TBooks } from '../store/bookSlice/type';
import HeartSVG from '../SVG-components/HeartSVG';
import { setSettingTest } from "../store/bookSlice/slice";
import Waiting from '../dataStatusLoading/Waiting/Waiting';


const Book = () => {

	const dispatch = useAppDispatch();
	const booksList = useAppSelector((state) => state.booksList);

	const [req, setReq] = useState(0);
	const books = booksList.books;
	const selectedBooks = booksList.selectedBooks;

	useEffect(() => {
		dispatch(fetchBooks())
	}, []);

	console.log(selectedBooks);

	return (
		<div className='book book-block'>

			{
				books.length === 0 ? <Waiting /> :
					<>
						{books?.map((book: TBooks) =>

							<div className={`book__card ${book.id}`}
								key={book.id}
								onClick={() => setReq(req + 1)}>
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

								<div
									className="book__shopping-cart">

									{selectedBooks?.find(item => item.id === book.id) === undefined ?
										<button
											className='btn btn__shopping-card'
											onClick={() => dispatch(setSettingTest(book))}>
											<p>в корзину</p>
										</button> :
										<button
											className='btn btn__shopping-card'
											style={{ backgroundColor: 'gray' }}
										>
											<p>открыть кор.</p>
										</button>}

									<button
										className="book__btn-favorites">
										<HeartSVG />
									</button>
								</div >
							</div>
						)}
					</>
			}

		</div>
	);

};


export default Book;


