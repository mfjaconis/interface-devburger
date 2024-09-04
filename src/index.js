import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import Login from "./containers/Login";
import { UserProvider } from "./hooks/UserContext";
import GlobalStyles from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<UserProvider>
			<Login />
			{/* <Register /> */}
		</UserProvider>
		<ToastContainer autoClose={2000} />
		<GlobalStyles />
	</>,
);
