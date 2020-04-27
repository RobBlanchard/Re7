import React, { useState, useEffect } from "react";
import Axios from "axios";

import RecipeGrid from "./RecipeGrid/RecipeGrid";

import "./App.css";

const initialRecipesItems = [
  {
    name: "AAA",
    text: "aaa",
  },
  {
    name: "BBB",
    text: "bbb",
  },
  {
    name: "CCC",
    text: "ccc",
  },
  {
    name: "DDD",
    text: "ddd",
  },
  {
    name: "EEE",
    text: "eee",
  },
  {
    name: "FFF",
    text: "fff",
  },
  {
    name: "GGG",
  },
];

function App() {
  const [recipesItems, setRecipesItems] = useState(initialRecipesItems);

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL + "recipes";
    Axios.get(url)
      .then((response) => {
        setRecipesItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return <RecipeGrid items={recipesItems}></RecipeGrid>;
}

export default App;
