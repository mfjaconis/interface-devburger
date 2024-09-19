import React, { useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ReactSelect from "react-select";
import { toast } from "react-toastify";
import * as Yup from "yup";
import api from "../../../services/api";
import { ErrorMessage } from "./../../../components/ErrorMessage";
import {
	ButtonStyles,
	Container,
	ContainerInput,
	Input,
	Label,
	LabelUpload,
} from "./styles";

function EditProduct() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategories] = useState([]);
	const {
		push,
		location: {
			state: { product },
		},
	} = useHistory();

	const schema = Yup.object().shape({
		name: Yup.string().required("Digite o nome do produto"),
		price: Yup.string().required("Digite o preço do produto"),
		category: Yup.object().required("Escolha uma categoria"),
		offer: Yup.boolean(),
	});

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		const productDataFormData = new FormData();

		productDataFormData.append("name", data.name);
		productDataFormData.append("price", data.price);
		productDataFormData.append("category_id", data.category.id);
		productDataFormData.append("file", data.file[0]);
		productDataFormData.append("offer", data.offer);

		await toast.promise(
			api.put(`/products/${product.id}`, productDataFormData),
			{
				pending: "Editando o produto",
				success: "Produto editado com sucesso",
				error: "Falha ao editar o produto",
			},
		);

		setTimeout(() => {
			push("/listar-produtos");
		}, 2000);
	};

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get("categories");

			setCategories(data);
		}
		loadCategories();
	}, []);

	return (
		<Container>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Label>Nome</Label>
					<Input
						type="text"
						{...register("name")}
						defaultValue={product.name}
					/>
					<ErrorMessage>{errors.name?.message}</ErrorMessage>
				</div>

				<div>
					<Label>Preço</Label>
					<Input
						type="number"
						{...register("price")}
						defaultValue={product.price}
					/>
					<ErrorMessage>{errors.price?.message}</ErrorMessage>
				</div>

				<div>
					<LabelUpload>
						{fileName ? (
							fileName
						) : (
							<>
								<CloudUploadIcon />
								Carregue a imagem do produto
							</>
						)}
						<input
							type="file"
							accept="image/png, image/jpeg"
							{...register("file")}
							onChange={(value) => {
								setFileName(value.target.files[0]?.name);
							}}
						/>
					</LabelUpload>
					<ErrorMessage>{errors.file?.message}</ErrorMessage>
				</div>

				<div>
					<Controller
						name="category"
						control={control}
						defaultValue={product.category}
						render={({ field }) => {
							return (
								<ReactSelect
									{...field}
									options={categories}
									getOptionLabel={(cat) => cat.name}
									placeholder="Categorias"
									defaultValue={product.category}
								/>
							);
						}}
					>
						{" "}
					</Controller>
					<ErrorMessage>{errors.category?.message}</ErrorMessage>
				</div>

				<ContainerInput>
					<input
						type="checkbox"
						defaultChecked={product.offer}
						{...register("offer")}
					/>
					<Label className="offer-label">Produto em oferta?</Label>
				</ContainerInput>

				<ButtonStyles>Editar Produto</ButtonStyles>
			</form>
		</Container>
	);
}

export default EditProduct;
