
import ArrowNextPromoSVG from "../../SVG-components/SliderSVG/ArrowNextPromoSVG";
import { TPropsCustomArrow } from "./TPropsCustomArrow";

const CustomSlickNextArrowPromo = (props: TPropsCustomArrow) => {
	const { className, style, onClick } = props;
	return (
			<ArrowNextPromoSVG
				width={30}
				height={30}
			/>
	);
};


export default CustomSlickNextArrowPromo;