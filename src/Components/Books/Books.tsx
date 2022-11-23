import { useEffect, useState, useRef, useMemo } from "react";
import { BooksDescr } from "./BooksRatingPrise/BooksRatingPrise";
import "./Books.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { TBooks } from "../../store/booksSlice/types";
import HeartSVG from "../SVG-Components/HeartSVG";
import { setSelectedBooks } from "../../store/booksSlice/slice";

interface BooksProps {
  book: TBooks;
}

export const Books = ({ book }: BooksProps) => {
  const dispatch = useAppDispatch();
  const selectedBooks = useAppSelector(
    (state) => state.booksList.selectedBooks
  );
  const [req, setReq] = useState(0);

  return (
    <div
      className={`books__card`}
      key={book.id}
      onClick={() => setReq(req + 1)}
    >
      <div className="books__body">
        <img
          className="books__img"
          src={book.imageUrl}
          style={
            book.priceWithoutDiscount
              ? { marginBottom: "27px" }
              : { marginBottom: "14px" }
          }
        />
        <BooksDescr
          price={book.price}
          rating={book.bookRating}
          priceWithoutDiscount={book.priceWithoutDiscount}
        />

        <div className="books__name">{book.bookName}</div>
      </div>

      <div className="books__footer">
        <div className="books__author-name">{book.authorName}</div>

        <div className="books__shopping-cart">
          {selectedBooks?.find((item) => item.id === book.id) === undefined ? (
            <button
              className="btn btn__shopping-card"
              onClick={() => dispatch(setSelectedBooks(book))}
            >
              <p>в корзину</p>
            </button>
          ) : (
            <button
              className="btn btn__shopping-card"
              style={{ backgroundColor: "gray" }}
            >
              <p>корзина</p>
            </button>
          )}

          <button className="books__btn-favorites">
            <HeartSVG />
          </button>
        </div>
      </div>
    </div>
  );
};
