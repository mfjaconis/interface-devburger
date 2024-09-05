import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "./../containers/Register/index";
import PrivateRoute from "./private-route";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/cadastro" component={Register} />
				<PrivateRoute exact path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default Routes;
