import "./style.css";

import { Route, Switch } from "react-router";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
