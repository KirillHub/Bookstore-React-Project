import MagnifierSVG from "../../../../SVG-components/Magnifier";
import "./Search.scss";

const Search = () => {

	return (
		<div
			className="header__search-block">
			<MagnifierSVG />
			<input
				className="header__input"
				type="text"
				placeholder="Поиск"
			/>
		</div>
	)
};


export default Search;