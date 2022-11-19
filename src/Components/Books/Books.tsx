import { useEffect, useState, useRef, useMemo } from 'react';
import { BooksDescr } from './BooksRatingPrise/BooksRatingPrise';
import './Books.scss';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchBooks, setSortArrayOfBooks } from '../../store/booksSlice/slice';
import { TBooks } from '../../store/booksSlice/type';
import HeartSVG from '../../SVG-components/HeartSVG';
import { setSelectedBooks } from "../../store/booksSlice/slice";
import Waiting from '../DataStatusLoading/Waiting/Waiting';




const Books = ({ books }) => { // showProductPriceWithoutDiscount
	const dispatch = useAppDispatch();
	const selectedBooks = useAppSelector(state => state.booksList.selectedBooks); // объявленный пустой массив, в который будут динамически при клике пушиться книги, при клике "Добовит в корзину"

	const [req, setReq] = useState(0);

	// let _width = `${books.length * 100}px`;

	return (

		<>
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

								<BooksDescr price={book.price} rating={book.bookRating} priceWithoutDiscount={book.priceWithoutDiscount} />

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
											onClick={() => dispatch(setSelectedBooks(book))}>
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
		</>

	);

};

export default Books;



