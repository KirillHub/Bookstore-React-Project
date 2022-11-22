import { Books } from "../../Components/Books/Books";
import BooksSlider from "../../Sliders/BooksSlider/BooksSlider";
import { discountBooks } from "../../store/booksSlice/slice";
import { useAppSelector } from "../../store/store";
import "./Sale.scss";

export default function Sale() {
  const discountBooksArray = useAppSelector(discountBooks);

  return (
    <div className="sale">
      <div className="sale__header">
        <div className="sale__title">Распродажа</div>
      </div>
      <div className="sale__body">
        <div className="sale__books-slider">
          <BooksSlider booksArray={discountBooksArray} />
        </div>
      </div>
    </div>
  );
}
