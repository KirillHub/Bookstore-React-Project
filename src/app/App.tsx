import { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Pages/Header/Header';

import Book from '../Book/Book';
import Promo from '../Pages/Promo/Promo';
import Slider from 'react-slick';
import { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Waiting from '../dataStatusLoading/Waiting/Waiting';


function App() {

	return (
		<div className="App">
			<div className='_wrapper container'>
				<Header />
				<Promo />

				<Book />



			</div>
		</div>
	);
}


export default App;



