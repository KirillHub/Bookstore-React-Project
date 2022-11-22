import BooksSliderLeftSVG from "../../SVG-components/SliderSVG/BooksSliderLeftSVG";
import { TPropsCustomArrow } from "./TPropsCustomArrow";

const CustomSlickPrevArrow = (props: TPropsCustomArrow) => {
	const { className, style, onClick } = props;
	return (
		<BooksSliderLeftSVG
			width={20}
			height={40}
		/>
	);
};

export default CustomSlickPrevArrow;