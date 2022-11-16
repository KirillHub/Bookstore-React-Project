import React from 'react';
import { TBooksDescr } from "./types";

export const BooksDescr: React.FC<TBooksDescr> = ({ price, rating }: TBooksDescr) => {

	return (
		<div className='books__price-raite'>
			<span className='books__price-raite_star'> ★ {rating}</span>
			<span> {price}</span>
		</div>
	)

};


