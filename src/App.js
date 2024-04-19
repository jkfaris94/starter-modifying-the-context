import Header from "./components/common/Header";
import BooksList from "./components/Books/BooksList";

import { BooksContext } from "./contexts/BooksContext";
import booksData from "./data/books.json";

function App() {
  return (
    <BooksContext.Provider value={booksData}>
      <Header />
      <BooksList />
    </BooksContext.Provider>
  );
}

export default App;
