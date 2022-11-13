import "./Links.scss";

const linkNames = ['Акции', 'Каталлог', 'Доставка', 'О магазине', 'Блог'];

export const Links = () => {

	return (
		<div
			className="header__links links-header">
			<ul
				className="links-header">
				{
					linkNames.map((item, id) =>
						<li
							key={id}
							className="links-header__row">
							<a
								className="links-header__link"
								href="#">{item}</a>
						</li>
					)
				}
			</ul>
		</div>
	);
}