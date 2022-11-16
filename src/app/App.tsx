import './App.scss';
import Header from '../Pages/Header/Header';
import Promo from '../Pages/Promo/Promo';
import HotArrivals from '../Pages/HotArrivals/HotArrivals';
import Books from '../Components/Books/Books';


function App() {

	return (
		<div className="App">


			<div className='_wrapper container'>
				<Header />
				<Promo />
				<HotArrivals />

			</div>
		</div>
	);
}


export default App;



