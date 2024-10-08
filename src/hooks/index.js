import React from "react";

import PropTypes from "prop-types";

import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

const AppProvider = ({ children }) => (
	<CartProvider>
		<UserProvider>{children}</UserProvider>
	</CartProvider>
);

AppProvider.propTypes = {
	children: PropTypes.node,
};

export default AppProvider;
