import { useEffect, useState } from 'react';
import axios from 'axios';
import { BookDescr } from './BookRatingPrise/BookRatingPrise';
import { TBook } from './BookTypes/BookTypes';
import './Book.scss';
import BookCart from './BookCart/BookCart';


const Book = () => {

	const [products, setProducts] = useState<TBook[]>();

	const axiosReq = async () => {
		const apiUrl = 'http://localhost:8000/books';
		const response = await axios.get<TBook[]>(apiUrl);

		setProducts(response.data);
	};

	useEffect(() => {
		axiosReq()
	}, [setProducts]);

	console.log(products);

	return (
		<div className='book book-block'>
			{
				products?.map((book: any) =>
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

						<BookCart />

					</div>
				)
			}
		</div>
	);

};


export default Book;