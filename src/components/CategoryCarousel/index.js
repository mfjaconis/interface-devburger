import React, { useEffect, useState } from "react";

import Category from "../../assets/category.png";
import api from "../../services/api";
import {
	Button,
	CategoryImg,
	Container,
	ContainerItems,
	Image,
	StyledCarousel,
} from "./styles";

export function CategoryCarousel() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get("categories");

			setCategories(data);
		}

		loadCategories();
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
			<CategoryImg src={Category} alt="Logo da categoria" />

			<StyledCarousel itemsToShow={5} breakPoints={breakPoints}>
				{categories?.map((category) => (
					<ContainerItems key={category.id}>
						<Image src={category.url} alt="foto da categoria" />
						<Button
							to={{
								pathname: "/produtos",
								state: { categoryId: category.id },
							}}
						>
							{category.name}
						</Button>
					</ContainerItems>
				))}
			</StyledCarousel>
		</Container>
	);
}
