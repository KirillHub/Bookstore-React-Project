import './App.scss';
import Header from '../Pages/Header/Header';
import Promo from '../Pages/Promo/Promo';
import HotArrivals from '../Pages/HotArrivals/HotArrivals';
import Books from '../Components/Books/Books';
import Sale from '../Pages/Sale/Sale';


function App() {

	return (
		<div className="App">

			<div className='_wrapper container'>
				<Header />
				<Promo />
				<HotArrivals />
				{/* <Sale/> */}
			</div>
			
		</div>
	);
}


export default App;



