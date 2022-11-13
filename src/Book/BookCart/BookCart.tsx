import { TBooks } from "../../store/bookSlice/type";
import HeartSVG from "../../SVG-components/HeartSVG";
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../store/store";
import { settingTest } from "../../store/bookSlice/slice";


//  onClickAddProductToCart
function sendProductDataOnCart(clickedProduct: TBooks) {
	console.log(clickedProduct);
}


const BookCart = ({ takeProduct }) => {

	const dispatch = useAppDispatch();
	const postClickedBookData = useAppSelector(state => state.booksList.selectedBooks);


	useEffect(() => {
		// dispatch(settingTest(takeProduct))
	}, [postClickedBookData]);

	// console.log(postClickedBookData);


	return (
		<div
			className="book__shopping-cart">
			<button
				className='btn btn__catalog'
				onClick={(() => sendProductDataOnCart(takeProduct.id))}>
				<p>в корзину</p>
			</button>

			<button
			className="book__btn-favorites">
				<HeartSVG />
			</button>
		</div>
	);
};

export default BookCart;