import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Cart, Home, Login, Products, Register } from "../containers";
import PrivateRoute from "./private-route";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/cadastro" component={Register} />
				<PrivateRoute exact path="/" component={Home} />
				<PrivateRoute path="/produtos" component={Products} />
				<PrivateRoute path="/carrinho" component={Cart} />
			</Switch>
		</Router>
	);
}

export default Routes;
