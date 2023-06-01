import axios from "axios";
import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { key } from "./key";

type TBook = {
  volumeInfo: {
    authors: Array<string>;
    categories: Array<string>;
    imageLinks: {
      thumbnail: string;
    };
    title: string;
  };
};

function App() {
  const [books, setBooks] = useState<TBook[]>([]);
  const [book, setBook] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [sortingBy, setSortingBy] = useState("relevance");
  const [category, setCategory] = useState("");

  function handleSearch(book: string) {
    if (book === "") {
      return [];
    }
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}${category}&key=${key}&maxResults=30&orderBy=${sortingBy}`
      )
      .then((data) => {
        console.log(data);

        if (+data.data.totalItems) {
          setBook(book);
          setTotalItems(+data.data.totalItems);
          setBooks(data.data.items);
          setLoading(false);
        } else {
          setBook(book);
          setTotalItems(+data.data.totalItems);
          setBooks([]);
          setLoading(false);
        }
      });
  }

  function loadMore() {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}${category}&key=${key}&maxResults=30&startIndex=${+books.length}&orderBy=${sortingBy}`
      )
      .then((data) => {
        setBooks(books.concat(data.data.items));
        setLoading(false);
      });
  }

  function sortBy(sort: string) {
    setSortingBy(sort);
  }

  function categoryBy(category: string) {
    category === "all" ? setCategory("") : setCategory("+subject:" + category);
  }

  return (
    <div className="App">
      <Header
        handleSearch={handleSearch}
        sortBy={sortBy}
        categoryBy={categoryBy}
      />
      <h1>Total items - {totalItems}</h1>
      <Content
        books={books}
        isLoading={isLoading}
        totalItems={totalItems}
        loadMore={loadMore}
      />
    </div>
  );
}

export default App;
