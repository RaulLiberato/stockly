import { getProducts } from "../_data-access/product/get-products";
import { ComboboxOption } from "../_components/ui/combobox";
import UpsertSaleButton from "./_components/create-sale-button";
import { DataTable } from "../_components/ui/data-table";
import { saleTableColumns } from "./_components/table-columns";
import { getSales } from "../_data-access/sale/get-sales";
import Header, {
  HeaderLeft,
  HeaderRigth,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";

const SalesPage = async () => {
  const sales = await getSales();
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    value: product.id,
    label: product.name,
  }));

  const tableData = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Vendas</HeaderTitle>
          <HeaderSubtitle>Gestão de Vendas</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRigth>
          <UpsertSaleButton
            products={products}
            productOptions={productOptions}
          />
        </HeaderRigth>
      </Header>
      <DataTable columns={saleTableColumns} data={tableData} />
    </div>
  );
};

export default SalesPage;
