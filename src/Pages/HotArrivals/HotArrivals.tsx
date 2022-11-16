import Books from '../../Components/Books/Books';
import './HotArrivals.scss';

export default function HotArrivals() {

	const linksBooksGenres = ['Фантастика', 'Бизнес-литература', 'Фэнтези', 'Детективы', 'Классика', 'Аудиокниги'];

	return (
		<div className="hot-arrivals">
			<div className="hot-arrivals__block">
				<div className="hot-arrivals__header">
					<h2 className="hot-arrivals__title">
						Горячие поступления
					</h2>
					<ul className="hot-arrivals__links">
						{
							linksBooksGenres.map((link, id) =>
								<li
									className='hot-arrivals__row'
									key={id}>
									<a href="#" className="hot-arrivals__link">
										{link}
									</a>
								</li>)
						}
					</ul>
				</div>

				<div className="hot-arrivals__wrapper-books-list">
					<Books/>
				</div>

			</div>
		</div>

	)
}