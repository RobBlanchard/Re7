import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Col from "react-bootstrap/Col";

import LoginNavbar from "./LoginNavbar/LoginNavbar";
import MainRecipesPage from "./MainRecipesPage/MainRecipesPage";
import RecipeDetail from "./RecipeDetail/RecipeDetail";
import AddRecipe from "./AddModifyRecipe/AddRecipe";
import ModifyRecipe from "./AddModifyRecipe/ModifyRecipe";
import RegisterPage from "./RegisterPage/RegisterPage";
import UserPage from "./UserPage/UserPage";
import SearchResultsPage from "./SearchResultsPage/SearchResultsPage";

function App() {
  const [logged, setLogged] = useState(false);

  const handleLogin = () => {
    setLogged(true);
  };
  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    setLogged(false);
  };

  useEffect(() => {
    //to do: check connection, refresh token if necessary
    if (!!localStorage.getItem("access_token")) {
      handleLogin();
    }
  }, []);

  return (
    <BrowserRouter>
      <LoginNavbar
        logged={logged}
        handleLogin={handleLogin}
        handleSignOut={handleSignOut}
      />

      <Col md={9} className="mx-auto">
        <Switch>
          <Route exact path="/">
            <Redirect to="/recipes/" />
          </Route>
          <Route path="/recipes/mod_recipe/:id">
            <ModifyRecipe />
          </Route>
          <Route exact path="/recipes/add_recipe">
            <AddRecipe logged={logged} />
          </Route>
          <Route path="/recipes/:id">
            <RecipeDetail />
          </Route>
          <Route path="/recipes/">
            <MainRecipesPage />
          </Route>
          <Route path="/search">
            <SearchResultsPage />
          </Route>
          <Route path="/register">
            <RegisterPage handleLogin={handleLogin} />
          </Route>
          <Route path="/users/:username">
            <UserPage />
          </Route>
        </Switch>
      </Col>
    </BrowserRouter>
  );
}

export default App;
