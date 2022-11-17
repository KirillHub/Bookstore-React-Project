import { useEffect, useState, useRef } from 'react';
import { BooksDescr } from './BooksRatingPrise/BooksRatingPrise';
import './Books.scss';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchBooks, sortArrayOfBooks } from '../../store/booksSlice/slice';
import { TBooks } from '../../store/booksSlice/type';
import HeartSVG from '../../SVG-components/HeartSVG';
import { setSettingTest } from "../../store/booksSlice/slice";
import Waiting from '../DataStatusLoading/Waiting/Waiting';

import { useMatchMedia } from '../../hooks/use-match-media';


const useRandomBooks = (_booksArray: any) => {

	console.log(_booksArray);

	const _sortArrayOfBooks = _booksArray.keys().sort(() => Math.random() - 0.5).slice(0, 7);
	console.log(_sortArrayOfBooks);


	// const getValues = _booksArray.sort();

	/*
		const getValues = _booksArray.sort().map(book => console.log(book));
	
		const [values, setValues] = useState(getValues);
	
		useEffect(() => {
			const handler = () => setValues(getValues);
	
			console.log(handler);
			
		});
	*/
};

const Books = () => {

	const dispatch = useAppDispatch();
	const booksList = useAppSelector(state => state.booksList);

	const [req, setReq] = useState(0);

	const [stateBooks, setStateBooks] = useState<any>([]);

	const books = booksList.books;
	const selectedBooks = booksList.selectedBooks;

	// console.log(books);
	// console.log(dispatch(sortArrayOfBooks(books)));

	// const [_sortedArray, setSortedArray] = useState([]);

	// console.log([...books]?.sort((a, b) => +b?.id - +a?.id * Math.random()));

	// console.log(books); 



	//? .sort((a, b) => b - a * Math.random())
	// let _a = dispatch(sortArrayOfBooks(books))

	let a = dispatch(sortArrayOfBooks(books));
		console.log(a);


	useEffect(() => {
		dispatch(fetchBooks())
	}, []);



	let _width = `${books.length * 100}px`;

	return (
		<div
			className='wrapper-scroll'
		>

			<div className='books'>
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


