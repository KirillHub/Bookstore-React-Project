
const HeartSVG = () => {
	return (

		<svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7.69557 1.625C4.35365 1.625 1.64355 4.30267 1.64355 7.60625C1.64355 10.273 2.70266 16.6023 13.1279 23.0004C13.3146 23.1138 13.529 23.1738 13.7476 23.1738C13.9662 23.1738 14.1806 23.1138 14.3673 23.0004C24.7925 16.6023 25.8516 10.273 25.8516 7.60625C25.8516 4.30267 23.1415 1.625 19.7996 1.625C16.4577 1.625 13.7476 5.25 13.7476 5.25C13.7476 5.25 11.0375 1.625 7.69557 1.625Z" stroke="#E16A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>

	);
};


const BookCart = () => {

	return (
		<div
			className="book__shopping-cart">
			<button
				className='btn btn__catalog'>
				<p>в корзину</p>
			</button>

			<span>
				<HeartSVG />
			</span>

		</div>
	);
};

export default BookCart;