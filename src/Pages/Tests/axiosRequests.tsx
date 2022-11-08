import { useEffect, useState } from 'react';
import axios from 'axios';
import { TAxiosRequestData } from '../../AxiosRequestData/typesAxiosRequestData';


export const AxiosRequestDataTest = () => { //!

	const [products, setProducts] = useState<TAxiosRequestData[]>();

	useEffect(() => {

		const apiUrl = 'http://localhost:8000/books';

		axios.get(apiUrl)
			.then(resp => {
				// console.log(resp); // в данном месте ещё не вытянуты данные

				const respProductsData = resp?.data;  // получение данных .data (? -> проверка на undef.)
				setProducts(respProductsData);
			});

	}, [setProducts]);

	console.log(products);

	return (
		<div>
			{products?.map((item) =>
				<div>
					<img src={item.imageUrl} alt="" />
				</div>
			)}
		</div>
	)
};



