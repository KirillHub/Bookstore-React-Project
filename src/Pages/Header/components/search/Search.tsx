import MagnifierSVG from "../../../../Components/SVG-Components/Magnifier";
import "./Search.scss";

const Search = () => {
  return (
    <div className="header__search-block">
      <MagnifierSVG />
      <input className="header__input" type="text" placeholder="Поиск" />
    </div>
  );
};

export default Search;
