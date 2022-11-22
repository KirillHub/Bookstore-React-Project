import { useEffect, useState, useRef, useMemo } from 'react';
import { BooksDescr } from './BooksRatingPrise/BooksRatingPrise';
import './Books.scss';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { TBooks } from '../../store/booksSlice/types';
import HeartSVG from '../../SVG-components/HeartSVG';
import { setSelectedBooks } from "../../store/booksSlice/slice";
import Waiting from '../DataStatusLoading/Waiting/Waiting';




const Books = ({ book }) => {
	const dispatch = useAppDispatch();
	const selectedBooks = useAppSelector(state => state.booksList.selectedBooks);
	const [req, setReq] = useState(0);

	return (

		<div className={`books__card`}
			key={book.id}
			onClick={() => setReq(req + 1)}>

			<img
				className='books__img'
				src={book.imageUrl}
				style={book.priceWithoutDiscount ? { marginBottom: '25px' }
					: { marginBottom: '10px' }}
			/>

			<BooksDescr price={book.price} rating={book.bookRating}
				priceWithoutDiscount={book.priceWithoutDiscount} />

			<div
				className='books__name'>
				{book.bookName}
			</div>

			<div
				className="books__footer">

				<div
					className='books__author-name'>
					{book.authorName}
				</div>

				<div className="books__shopping-cart">
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
				</div>
			</div >
		</div>


	);

};


export const BookForSlider = ({ id, imageUrl,
	priceWithoutDiscount, bookRating, price, bookName,
	authorName }) => {
	return (
		<div className={`books__card`}
			key={id}>

			<img
				className='books__img'
				src={imageUrl}
				style={priceWithoutDiscount ? { marginBottom: '25px' }
					: { marginBottom: '10px' }}
			/>

			<BooksDescr price={price} rating={bookRating}
				priceWithoutDiscount={priceWithoutDiscount} />

			<div
				className='books__name'>
				{bookName}
			</div>

			<div
				className='books__author-name'>
				{authorName}
			</div>

			<div
				className="books__shopping-cart">


				<button
					className='btn btn__shopping-card'
				>
					<p>в корзину</p>
				</button> :
				<button
					className='btn btn__shopping-card'
					style={{ backgroundColor: 'gray' }}
				>
					<p>корзина</p>
				</button>

				<button
					className="books__btn-favorites">
					<HeartSVG />
				</button>
			</div >
		</div>

	)
};

export default Books;



