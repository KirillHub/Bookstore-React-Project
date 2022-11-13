import { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Pages/Header/Header';

import Book from '../Book/Book';


function App() {

	return (
		<div className="App">
			<div className='_wrapper container'>
				<Header />  

				{/* {0 ? <AxiosRequestData /> : 'hello'}  */}
				<Book />


			</div>
		</div>
	);
}


export default App;
