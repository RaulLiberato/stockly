import { DataTable } from "../_components/ui/data-table";
import { productsTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import AddProductButton from "./_components/create-product-button";
import Header, {
  HeaderLeft,
  HeaderRigth,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Produtos</HeaderTitle>
          <HeaderSubtitle>Gestão de Produtos</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRigth>
          <AddProductButton />
        </HeaderRigth>
      </Header>
      <DataTable
        columns={productsTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
