import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./component/Card";
import Table from "./component/Table";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Card} />
        <Route exact path="/table" component={Table} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
