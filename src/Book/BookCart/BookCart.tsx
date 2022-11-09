import HeartSVG from "../../SVG-components/HeartSVG";


const BookCart = () => {

	return (
		<div
			className="book__shopping-cart">
			<button
				className='btn btn__catalog'>
				<p>в корзину</p>
			</button>

			<HeartSVG />
		</div>
	);
};

export default BookCart;