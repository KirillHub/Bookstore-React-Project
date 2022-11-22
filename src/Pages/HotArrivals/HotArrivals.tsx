import "./HotArrivals.scss";
import { sortedBooks } from "../../store/booksSlice/slice";
import BooksSlider from "../../Sliders/BooksSlider/BooksSlider";
import { TBooks } from "../../store/booksSlice/types";
import { useAppSelector } from "../../store/store";

export default function HotArrivals() {
  const linksBooksGenres = [
    "Фантастика",
    "Фэнтези",
    "Детективы",
    "Классика",
    "Аудиокниги",
  ];

  const sortedBooksArray = useAppSelector(sortedBooks);

  return (
    <div className="hot-arrivals">
      <div className="hot-arrivals__block">
        <div className="hot-arrivals__header">
          <h2 className="hot-arrivals__title">Горячие поступления</h2>
          <ul className="hot-arrivals__links">
            {linksBooksGenres.map((link, id) => (
              <li className="hot-arrivals__row" key={id}>
                <a href="#" className="hot-arrivals__link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hot-arrivals__books-slider">
          <BooksSlider booksArray={sortedBooksArray} />
        </div>
      </div>
    </div>
  );
}
