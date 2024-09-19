import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import paths from "../constantes/paths";
import { Admin, Cart, Home, Login, Products, Register } from "../containers";
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

				<PrivateRoute path={paths.Order} component={Admin} isAdmin />
				<PrivateRoute path={paths.Products} component={Admin} isAdmin />
				<PrivateRoute path={paths.NewProduct} component={Admin} isAdmin />
				<PrivateRoute path={paths.EditProduct} component={Admin} isAdmin />
			</Switch>
		</Router>
	);
}

export default Routes;
