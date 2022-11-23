import BookSVG from "../../../../Components/SVG-Components/BookSVG";
import "./Logo.scss";

export const Logo = () => {
  return (
    <div className="header__logo">
      <BookSVG />
      <div className="header__logo-text">
        <p className="header__title">БИБЛИОТЕЧНАЯ</p>
        <p className="header__subtitle">книжный магазин</p>
      </div>
    </div>
  );
};
