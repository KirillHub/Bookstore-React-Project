import './Description.scss';


export default function Description() {

	return (
		<div className="promo__description-block">
			<div
				className='promo__description description'>
				<div className="description__title">
					Книги от  А до Я
				</div>
				<div className="description__subtitle">
					В нашем магазине можно найти книгу на любой вкус.
					Большой ассортимент. Приятные цены. Интересные сюжеты.
				</div>
				<button
					className='btn btn__catalog'>
					<p>
						Перейти в каталог
					</p>
				</button>
			</div>
		</div>
	)
}