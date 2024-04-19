import Header from "./components/common/Header";
import BooksList from "./components/Books/BooksList";

import { BorrowedBooksCountContext } from "./contexts/BorrowedBooksCountContext";
import booksData from "./data/books.json";

function App() {
  const borrowedCount = booksData.filter((book) => book.borrowed).length;
  return (
    <BorrowedBooksCountContext.Provider value={borrowedCount}>
      <Header booksLength={booksData.length} />
      <BooksList books={booksData} />
    </BorrowedBooksCountContext.Provider>
  );
}

export default App;
