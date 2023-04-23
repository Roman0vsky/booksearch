import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import MyButton from "./components/MyButton/MyButton";

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

  function handleSearch(book: string) {
    if (book === "") {
      return [];
    }
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCamNDFoi4wnbgAK5LcO7YSb_PrJsCE5Pc&maxResults=30`
      )
      .then((data) => {
        // console.log(data.data);
        setBook(book);
        setTotalItems(+data.data.totalItems);
        setBooks(data.data.items);
        setLoading(false);
      });
  }

  function loadMore() {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCamNDFoi4wnbgAK5LcO7YSb_PrJsCE5Pc&maxResults=30&startIndex=${+books.length}`
      )
      .then((data) => {
        // console.log(data.data);
        setBooks(books.concat(data.data.items));
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <h1>Total items - {totalItems}</h1>
      <Content books={books} isLoading={isLoading} totalItems={totalItems} loadMore={loadMore}/>
    </div>
  );
}

export default App;
