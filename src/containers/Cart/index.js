import React from "react";

import CartLogo from "../../assets/cart-image.svg";
import { CartResume } from "../../components/CartResume";
import { CartItems } from "./../../components/CartItems/index";
import { CartImg, Container, Wrapper } from "./styles";

export function Cart() {
	return (
		<Container>
			<CartImg src={CartLogo} alt="Logo da Cart" />
			<Wrapper>
				<CartItems />
				<CartResume />
			</Wrapper>
		</Container>
	);
}
