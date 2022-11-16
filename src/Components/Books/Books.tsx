import { useEffect, useState } from 'react';
import { BooksDescr } from './BooksRatingPrise/BooksRatingPrise';
import './Books.scss';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchBooks } from '../../store/booksSlice/slice';
import { TBooks } from '../../store/booksSlice/type';
import HeartSVG from '../../SVG-components/HeartSVG';
import { setSettingTest } from "../../store/booksSlice/slice";
import Waiting from '../DataStatusLoading/Waiting/Waiting';

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const Books = () => {

	const dispatch = useAppDispatch();
	const booksList = useAppSelector((state) => state.booksList);

	const [req, setReq] = useState(0);
	const books = booksList.books;
	const selectedBooks = booksList.selectedBooks;

	useEffect(() => {
		dispatch(fetchBooks())
	}, []);

	console.log(selectedBooks);

	const defaultOptions = {
		paddingAbsolute: false,
		showNativeOverlaidScrollbars: false,
		update: {
			elementEvents: [['img', 'load']],
			debounce: [0, 33],
			attributes: null,
			ignoreMutation: null,
		},
		overflow: {
			x: 'scroll',
			y: 'scroll',
		},
		scrollbars: {
			theme: 'os-theme-dark',
			visibility: 'auto',
			autoHide: 'never',
			autoHideDelay: 1300,
			dragScroll: true,
			clickScroll: false,
			pointers: ['mouse', 'touch', 'pen'],
		},
	};

	return (
		<OverlayScrollbarsComponent
			element="span"
			className='os-theme-dark custom-class'
			options={{
				scrollbars: {
					theme: 'os-theme-dark custom-class'
				}
			}}
			events={{ scroll: () => { /* ... */ } }}>
			<div className='books'>
				{
					books.length === 0 ? <Waiting /> :
						<>
							{books?.map((book: TBooks) =>

								<div className={`books__card ${book.id}`}
									key={book.id}
									onClick={() => setReq(req + 1)}>
									<img
										className='books__img'
										src={book.imageUrl}
									/>

									<BooksDescr price={book.price} rating={book.bookRating} />

									<div
										className='books__name'>
										{book.bookName}
									</div>

									<div
										className='books__author-name'>
										{book.authorName}
									</div>

									<div
										className="books__shopping-cart">

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
											className="books__btn-favorites">
											<HeartSVG />
										</button>
									</div >
								</div>
							)}
						</>
				}

			</div>
		</OverlayScrollbarsComponent >
	);

};


export default Books;


