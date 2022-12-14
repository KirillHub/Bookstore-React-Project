import './App.scss';
import Header from '../Pages/Header/Header';
import Promo from '../Pages/Promo/Promo';
import HotArrivals from '../Pages/HotArrivals/HotArrivals';
import Sale from '../Pages/Sale/Sale';
import React from 'react';
import { useAppDispatch } from '../store/store';
import { fetchBooks } from '../store/booksSlice/slice';
import Sidebar from '../Pages/Sidebar/Sidebar';



function App() {

	const dispatch = useAppDispatch();
	React.useEffect(() => {
		dispatch(fetchBooks())
	}, []);

	return (
		<div className="App">

			<div className='container'>

				<div
					className='aside-content-container'>
					<Sidebar />
				</div>

				<div
					className='main-content-container'>
					<Header />
					<Promo />
					<HotArrivals />
					<Sale />
				</div>

			</div>


		</div>
	);
}


export default App;



