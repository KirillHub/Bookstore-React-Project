import { selectedBooks } from "../../../../store/booksSlice/slice";
import { useAppSelector } from "../../../../store/store";
import ArrowDownSVG from "../../../../Components/SVG-Components/ArrowDownSVG";
import CartSVG from "../../../../Components/SVG-Components/CartSVG";
import HeartSVG from "../../../../Components/SVG-Components/HeartSVG";
import "./Purchases.scss";

const Purchases = () => {
  const selectedBooksArray = useAppSelector(selectedBooks);
  console.log(selectedBooksArray);

  const userPrice = [...selectedBooksArray.map((book) => book.price)].reduce(
    (accum, currentVal) => accum + currentVal,
    0
  );

  return (
    <div className="header__purchases purchases-header">
      <div className="purchases-header__orders">
        <div className="purchases-header__wish-list">
          <button>
            <HeartSVG />
          </button>
        </div>

        <div className="purchases-header__user-cart">
          <button>
            <CartSVG />
          </button>
        </div>
      </div>

      <div className="purchases-header__amount">
        <div className="purchases-header__product-price">{userPrice} грн.</div>
        <button className="purchases-header__button button-show-purchases">
          <ArrowDownSVG />
        </button>
      </div>
    </div>
  );
};

export default Purchases;
