import Slider from 'react-slick';
import './PromoSlider.scss';
import ArrowNextSVG from '../SVG-components/SliderSVG/ArrowNextVG';
import { useRef } from 'react';


const PromoSlider = () => {

	const slider = useRef<Slider>(null);

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "red" }}
				onClick={onClick}>
			</div>
		);
	};
	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "green" }}
				onClick={onClick}
			/>
		);
	};
	const settingOwnClasses = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: "button__bar",
		prevArrow: <SampleNextArrow />,
		nextArrow: <SamplePrevArrow />

	};

	return (
		<>
			<button
				style={{
					backgroundColor: 'inherit',
					position: 'absolute',
					top: '420px',
					left: '215px',
					width: '40px',
					height: '40px'
				}}
				onClick={() => slider?.current?.slickNext()}
			>
				<ArrowNextSVG width={30} height={27} />
			</button>

			<Slider ref={slider} {...settingOwnClasses}>
				<div>
					<img src="https://i.grenka.ua/shop/1/10/281/trilogiya-zhelaniya-superkomplekt-iz-3-knig_3cb_300_300.png" alt="" />
				</div>

				<div>
					<img src="https://i.grenka.ua/shop/1/10/863/trilogiya-vse-dushi-superkomplekt-iz-3-knig_889_300_300.png" alt="" />
				</div>

				<div>
					<img src="https://i.grenka.ua/shop/1/11/923/trilogiya-aloj-zimy-superkomplekt-iz-3-knig_bbe_300_300.png" alt="" />
				</div>
			</Slider>
		</>
	)
}


export default PromoSlider;