import React from 'react';
import { TBookDescr } from "./types";
// import './bookRatingPrise.scss'; // ? later check styles

/*
FC функциональный компонент
*/

export const BookDescr: React.FC<TBookDescr> = ({ price, rating }: TBookDescr) => {

	return (
		<div className='book__price-raite'>
			<span className='book__price-raite_star'> ★ {rating}</span>
			<span> {price}</span>
		</div>
	)

};


