import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Offers from "../../assets/offers.png";
import { useCart } from "../../hooks/CartContext";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import {
	Button,
	CategoryImg,
	Container,
	ContainerItems,
	Image,
	StyledCarousel,
} from "./styles";

export function OffersCarousel() {
	const [offers, setOffers] = useState([]);
	const { putProductInCart } = useCart();
	const { push } = useHistory();

	useEffect(() => {
		async function loadOffers() {
			const { data } = await api.get("products");

			const onlyOffers = data
				.filter((product) => product.offer)
				.map((product) => {
					return { ...product, formatedPrice: formatCurrency(product.price) };
				});

			setOffers(onlyOffers);
		}

		loadOffers();
	}, []);

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 400, itemsToShow: 2 },
		{ width: 600, itemsToShow: 3 },
		{ width: 900, itemsToShow: 4 },
		{ width: 1300, itemsToShow: 5 },
	];

	return (
		<Container>
			<CategoryImg src={Offers} alt="Logo da oferta" />

			<StyledCarousel itemsToShow={5} breakPoints={breakPoints}>
				{offers?.map((product) => (
					<ContainerItems key={product.id}>
						<Image src={product.url} alt="foto da produto" />
						<p>{product.name}</p>
						<p>{product.formatedPrice}</p>
						<Button
							onClick={() => {
								putProductInCart(product);
								push("/carrinho");
							}}
						>
							Peça agora
						</Button>
					</ContainerItems>
				))}
			</StyledCarousel>
		</Container>
	);
}
