import { useEffect, useState } from 'react';
import axios from 'axios';
import { TServerData } from '../Pages/Tests/dataTypes';
import Book from '../Book/Book';


export const axiosRequestData = async () => { //!

	const apiUrl = 'http://localhost:8000/books';

	try {
		await axios.get(apiUrl)
			.then(resp => {
				// console.log(resp); // в данном месте ещё не вытянуты данные

				const respProductsData = resp?.data;  // получение данных .data (? -> проверка на undef.)
				return respProductsData;
			});

	} catch (e) {
		console.log(axios.AxiosError);
	}

}