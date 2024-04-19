import { useContext } from "react";
import { BorrowedBooksCountContext } from "../../contexts/BorrowedBooksCountContext";

function Header({ booksLength }) {
  const count = useContext(BorrowedBooksCountContext);

  return (
    <header className="bg-warning">
      <div className="p-5 display-5 mb-0">
        <h1>Book Reservation</h1>
        <h2 className="text-dark text-opacity-75">
          {count} / {booksLength} Books Reserved.
        </h2>
      </div>
    </header>
  );
}

export default Header;
