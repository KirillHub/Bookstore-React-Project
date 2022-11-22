import PromoSlider from '../../../Sliders/PromoSlider/PromoSlider';
import './BooksCollection.scss';


export default function BooksCollection() {

	return (
		<div
			className='promo__books-collection books-collection'>

			<div
				className='books-collection__body'>
				<div
					className='books-collection__rectangle-parent'>
					<div className='books-collection__rectangle-main'></div>
					<div className='books-collection__rectangle-top_left'></div>
					<div className='books-collection__rectangle-top_right'></div>

					<div
						className='books-collection__slider'>
						<PromoSlider />
					</div>

					<div className='books-collection__rectangle-bottom'>

						<div className='books-collection__about'>
							<div className="books-collection__title">Комплект книг Марка Мэнсона</div>
							<div className="books-collection__descr">Тонкое искусство пофигизма. Всё хреново.
								Мужские правила.</div>
							<div className="books-collection__footer">
								<div className="books-collection__price">649 грн.</div>
							</div>
						</div>

					</div>
				</div>

			</div>


		</div>
	)
}



