import { useEffect, useState } from 'react';
import axios from 'axios';
import { TAxiosRequestData } from '../../AxiosRequestData/typesAxiosRequestData';

interface TDataLogo {
	shopTitle: string;
	shopSubTitle: string;
}

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


//? как правильно присвоить элементы интерфейса TDataLogo?
const axiosReqTitle = async () => {
	const link = 'http://localhost:8000/logo';
	const response = await axios.get<TDataLogo[]>(link)

	return response.data
};
