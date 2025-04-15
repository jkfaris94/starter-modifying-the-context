import { useContext, useState } from "react";
import Book from "./Book";
import { BooksContext } from "../../contexts/BooksContext";

function BooksList() {
  const booksContext = useContext(BooksContext);
  const [books, setBooks] = useState(booksContext);

    //This component will update a book to have its borrowed attribute set to true.
    const handleReserveButton = (bookId) => {
      const selected = books.find((book) => book.bookId === bookId);
      const index = books.indexOf(selected);
      setBooks([
        ...books.slice(0, index),
        { ...selected, borrowed: true },
        ...books.slice(index + 1),
      ]);
    };

    //update the bookList variable to include a reference to this function
  const bookList = books.map((book) => (
    <Book 
      key={book.bookId} 
      book={book}
      handleReserveButton={handleReserveButton} 
      />
    ));

  return (
    <div className="container mt-5">
      <section className="d-flex gap-2 flex-wrap align-items-stretch justify-content-center">
        {bookList}
      </section>
    </div>
  );
}

export default BooksList;
 