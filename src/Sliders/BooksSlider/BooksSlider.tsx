import './BooksSlider.scss';
import Slider from 'react-slick';
import { useRef } from 'react';
import Books, { BookForSlider } from '../../Components/Books/Books';
import { TBooks } from '../../store/booksSlice/types';
import CustomSlickPrevArrow from '../CustomArrows/CustomSlickPrevArrow';
import CustomSlickNextArrow from '../CustomArrows/CustomSlickNextArrow';


const BooksSlider = ({ booksArray }) => { //! later fix

	const slider = useRef<Slider>(null);

	const settingOwnClasses = {
		dots: false,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: <CustomSlickPrevArrow />,
		nextArrow: <CustomSlickNextArrow />,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		< >
			<button
				style={{
					backgroundColor: 'inherit',
					position: 'absolute',
					top: '200px',
					left: '-44px',
					width: '40px',
					height: '40px',
				}}
				onClick={() => slider?.current?.slickPrev()}
			>
				<CustomSlickPrevArrow />
			</button>

			<button
				style={{
					backgroundColor: 'inherit',
					position: 'absolute',
					top: '200px',
					left: '889px',
					width: '40px',
					height: '40px',
				}}
				onClick={() => slider?.current?.slickNext()}
			>
				<CustomSlickNextArrow />
			</button>


			<Slider ref={slider} {...settingOwnClasses}>
				{booksArray?.map(book =>
					<div
						className='books'>
						<Books
							book={book} />
					</div>
				)}
			</Slider>
		</>
	)
}


export default BooksSlider;
