import BooksSliderRightSVG from "../../Components/SVG-Components/Slider/BooksSliderRightSVG";
import { TPropsCustomArrow } from "./TPropsCustomArrow";

const CustomSlickNextArrow = (props: TPropsCustomArrow) => {
  const { className, style, onClick } = props;
  return <BooksSliderRightSVG width={20} height={40} />;
};

export default CustomSlickNextArrow;
