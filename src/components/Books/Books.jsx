import { useEffect, useState } from "react";
import Book from "../Book/Book";
import ListedBook from "../ListedBook/ListedBook";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/public/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold text-center mb-5 ">Books</h2>

      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
