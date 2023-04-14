import React, { useState } from "react";

export default async function loadData() {
  const responce = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyCamNDFoi4wnbgAK5LcO7YSb_PrJsCE5Pc`
  );
  const result = responce.json();
  return result;
}
