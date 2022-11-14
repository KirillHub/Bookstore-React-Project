import ArrowDownSVG from '../../../../SVG-components/ArrowDownSVG';
import CartSVG from '../../../../SVG-components/CartSVG';
import HeartSVG from '../../../../SVG-components/HeartSVG';
import './Purchases.scss';

const Purchases = () => {

	return (
		<div
			className='header__purchases purchases-header'>

			<div
				className='purchases-header__btn'>
				<button>
					<HeartSVG />
				</button>
				<button>
					<CartSVG />
				</button>
			</div>

			<div
				className='purchases-header__amount'>
				<div
					className='purchases-header__product-price'>
					* сумма грн.
					{/* потом вставить знач. с функции reduser */}
				</div>
				<button
					className='purchases-header__button button-show-purchases'>
					<ArrowDownSVG />
				</button>
			</div>

		</div>
	)
};


export default Purchases;