import './App.scss';
import Header from '../Pages/Header/Header';
import Promo from '../Pages/Promo/Promo';
import HotArrivals from '../Pages/HotArrivals/HotArrivals';
import Books from '../Components/Books/Books';
import Sale from '../Pages/Sale/Sale';

import { Routes, Route } from 'react-router-dom'
import { Box, Center, ChakraProvider, VStack } from '@chakra-ui/react'
import { ProtectedComponent } from '../authComponent/featuresAuth/ProtectedCoomponent';
import Login from '../authComponent/featuresAuth/Login';
import { PrivateOutlet } from '../utils/PrivateOutlet';

function Hooray() {
	return (
		<Center h="500px">
			<VStack>
				<Box>Hooray you logged in!</Box>
				<Box>
					<ProtectedComponent />
				</Box>
			</VStack>
		</Center>
	)
}


function App() {

	return (
		<div className="App">

			<div className='_wrapper container'>
				<Header />
				<Promo />
				<HotArrivals />
				{/* <Sale/> */}
			</div>

			<div>
					<Box>
						<Routes>
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<PrivateOutlet />}>
								<Route index element={<Hooray />} />
							</Route>
						</Routes>
					</Box>
			</div>

		</div>
	);
}


export default App;



