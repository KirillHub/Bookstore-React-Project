import { useState } from 'react'

interface TBookDescr {
	price: number;
	raite: number;

}

/*
FC функциональный компонент
*/

export const BookDescr: React.FC<TBookDescr> = ({ price, raite }: TBookDescr) => {

	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(3);

	console.log(left);
	console.log(right);

	const array = raite.toString().split('');

	const img = ['a', 'b', 'c', 'd', 'e'];



	return (
		<div className='book-descr'>
			{/* <span> {raite}</span> */}
			{/* <span> {price}</span> */}

			{
				img.slice(left, right).map(item => item) // !
			}

			<button onClick={() => { setRight(right - 1); setLeft(left - 1) }}
			>КНОПКА LEFT</button>
			<button onClick={() => { setRight(right + 1); setLeft(left + 1) }}>
				КНОПКА RIGHT	</button>
		</div>
	)

};



