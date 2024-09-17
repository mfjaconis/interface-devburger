import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useUser } from "../../hooks/UserContext";

import Cart from "../../assets/cart.svg";
import Person from "../../assets/person.svg";
import {
	Container,
	ContainerLeft,
	ContainerRight,
	ContainerText,
	Line,
	PageLink,
} from "./styles";

export function Header() {
	const { logout, userData } = useUser();
	const {
		push,
		location: { pathname },
	} = useHistory();

	const logoutUser = () => {
		logout();
	};

	return (
		<Container>
			<ContainerLeft>
				<PageLink onClick={() => push("/")} isActive={pathname === "/"}>
					Home
				</PageLink>
				<PageLink
					onClick={() => push("/produtos")}
					isActive={pathname.includes("produtos")}
				>
					Ver Produtos
				</PageLink>
			</ContainerLeft>
			<ContainerRight>
				<PageLink onClick={() => push("/carrinho")}>
					{" "}
					<img src={Cart} alt="Carrinho" />
				</PageLink>
				<Line> </Line>
				<PageLink>
					{" "}
					<img src={Person} alt="Logo-pessoa" />
				</PageLink>
				<ContainerText>
					<p>Olá, {userData.name}</p>
					<a href="/login" onClick={logoutUser}>
						Sair
					</a>
				</ContainerText>
			</ContainerRight>
		</Container>
	);
}
