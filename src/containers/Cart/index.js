import React from "react";

import CartLogo from "../../assets/cart-image.svg";
import { CartItems } from "./../../components/CartItems/index";
import { CartImg, Container } from "./styles";

export function Cart() {
	return (
		<Container>
			<CartImg src={CartLogo} alt="Logo da Cart" />
			<CartItems />
		</Container>
	);
}
