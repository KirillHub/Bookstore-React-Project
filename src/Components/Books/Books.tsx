import { useEffect, useState } from 'react';
import { BooksDescr } from './BooksRatingPrise/BooksRatingPrise';
import './Books.scss';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchBooks } from '../../store/booksSlice/slice';
import { TBooks } from '../../store/booksSlice/type';
import HeartSVG from '../../SVG-components/HeartSVG';
import { setSettingTest } from "../../store/booksSlice/slice";
import Waiting from '../DataStatusLoading/Waiting/Waiting';

// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useMatchMedia } from '../../hooks/use-match-media';
import { useRef } from 'react';



const Books = () => {

	const dispatch = useAppDispatch();
	const booksList = useAppSelector((state) => state.booksList);

	const [req, setReq] = useState(0);
	const books = booksList.books;
	const selectedBooks = booksList.selectedBooks;

	// const { isMobile } = useMatchMedia();
	// const hasScrooll = isMobile;
	const todoWrapper = useRef(null);

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
			theme: 'os-theme-dark ',
			visibility: 'auto',
			autoHide: 'never',
			autoHideDelay: 1300,
			dragScroll: true,
			clickScroll: false,
			pointers: ['mouse', 'touch', 'pen'],
		},
	};

	/*
		<OverlayScrollbarsComponent
				element="span"
				className='os-theme-dark custom-class os-host-flexbox'
				options={{
					scrollbars: {
						theme: 'os-theme-dark custom-class os-host-flexbox'
					}
				}}
				events={{ scroll: () => { } }}>
					</OverlayScrollbarsComponent >
	*/

	let _width = `${books.length * 100}px`;

	return (
		<div
			className='wrapper-scroll'
			style={{ width: `${_width}`}}
			ref={todoWrapper}>

			<div className='books'

				style={{ width: `${_width}` }}>
				{
					books.length === 0 ? <Waiting /> :
						<>
							{books?.map((book: TBooks) =>

								<div className={`books__card`}
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
												<p>корзина</p>
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

		</div>
	);

};


export default Books;


