import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

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
  const [isLoading, setLoading] = useState(false);

  function handleSearch(book: string) {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCamNDFoi4wnbgAK5LcO7YSb_PrJsCE5Pc`
      )
      .then((data) => {
        console.log(data.data.items);
        console.log("useEffect works");
        setBooks(data.data.items);
        setLoading(false);
      });
  }

  function changeLoading() {

  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Content books={books} isLoading={isLoading} />
    </div>
  );
}

export default App;
