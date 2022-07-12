import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App p-3 mb-2 bg-secondary text-white">
      <Router>
        <Header />
        <Switch>
          <Route path="/allProducts" exact component={ProductListing} />
          <Route path="/oneProduct/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
