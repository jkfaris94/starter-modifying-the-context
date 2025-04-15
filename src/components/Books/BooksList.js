import { useContext, useState } from "react";
import Book from "./Book";
import { BooksContext } from "../../contexts/BooksContext";

function BooksList() {
  const booksContext = useContext(BooksContext);
  const [books, setBooks] = useState(booksContext);
  
  const bookList = books.map((book) => <Book key={book.bookId} book={book} />);
  return (
    <div className="container mt-5">
      <section className="d-flex gap-2 flex-wrap align-items-stretch justify-content-center">
        {bookList}
      </section>
    </div>
  );
}

export default BooksList;
 