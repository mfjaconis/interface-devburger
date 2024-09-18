import LocalMallIcon from "@mui/icons-material/LocalMall";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import paths from "./../../constantes/paths";

const listLinks = [
	{
		id: 1,
		label: "Pedidos",
		link: paths.Order,
		icon: LocalMallIcon,
	},
	{
		id: 2,
		label: "Produtos",
		link: paths.Products,
		icon: StorefrontIcon,
	},
	{
		id: 3,
		label: "Adicionar Produtos",
		link: paths.NewProduct,
		icon: ViewInArIcon,
	},
];

export default listLinks;
