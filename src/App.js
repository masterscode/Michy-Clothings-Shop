import React from "react";
import "./App.css";
import HomePage from "./components/homepage/homepage.components";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <Switch>
      <Route exact path= '/' component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
