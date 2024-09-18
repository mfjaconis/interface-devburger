import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import api from "../../../services/api";
import formatCurrency from "./../../../utils/formatCurrency";
import { Container, EditIcons, Img } from "./styles";

function ListProducts() {
	const [products, setProducts] = useState();

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get("products");

			setProducts(data);
		}
		loadProducts();
	}, []);

	function isOffer(offerStatus) {
		if (offerStatus) {
			return <CheckBoxIcon style={{ color: "green" }} />;
		}
		return <DisabledByDefaultIcon style={{ color: "red" }} />;
	}

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Nome</TableCell>
							<TableCell>Preço</TableCell>
							<TableCell align="center">Produto em Oferta</TableCell>
							<TableCell align="center">Imagem do Produto</TableCell>
							<TableCell align="center">Editar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products?.map((product) => (
							<TableRow
								key={product.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="product">
									{product.name}
								</TableCell>
								<TableCell>{formatCurrency(product.price)}</TableCell>
								<TableCell align="center">{isOffer(product.offer)}</TableCell>
								<TableCell align="center">
									<Img src={product.url} alt="imagem do produto" />
								</TableCell>
								<TableCell align="center">
									<EditIcons />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}

export default ListProducts;
