import { totalNumberOfBooksOnTheBackend } from "../../store/booksSlice/slice";
import { useAppSelector } from "../../store/store";
import "./Sidebar.scss";

const Sidebar = () => {
  const totalNumberOfBooks = useAppSelector(totalNumberOfBooksOnTheBackend);

  const checkingForEvenVal = (num: number) => {
    return num % 2 === 0 ? true : false; //true - чётные знач. false - нечётные
  };

  const artBooks = [
    "Современные авторы",
    "Романы о любви",
    "Историко-приключенческие",
    "Детективы",
    "Фантастика",
    "Фэнтези",
    "Триллеры",
    "Классика",
  ];

  const appliedBooks = [
    "Психология",
    "Саморазвитие, мотивация",
    "История и факты",
    "Справочная литература",
    "Здоровье и красота",
    "Бизнес-литература",
    "Учебная литература",
    "Кулинария",
  ];

  const booksForChildren = [
    "Детям до 4-х лет",
    "Детям 4-6 лет",
    "Детям 7-12 лет",
    "Детям от 12 лет",
  ];

  const books = [artBooks, appliedBooks, booksForChildren];

  return (
    <div className="sidebar">
      <aside className="sidebar__aside">
        <nav className="sidebar__art-books-block">
          <ul className="sidebar__art-books-list">
            Художественные
            <div>
              {totalNumberOfBooks}
              {checkingForEvenVal(totalNumberOfBooks) ? " книг" : " книга"}
            </div>
            {books[0]?.map((book) => (
              <li className="sidebar__art-books-list-item">
                <a href="&" className="sibedar__art-books-links">
                  {book}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
