import db from "@/prisma/client";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import CustomTable from "../components/CustomTable";
import { columns } from "./CustomColumns";
import { CreateProduct } from "./CreateProduct";
import { fetchProtectedPageData } from "../hooks/useProtectedPage";

const ProductsPage = async () => {
  await fetchProtectedPageData();
  const locale = "en";
  const products = (await db.product.findMany()) || [];

  return (
    <div>
      <div className="p-5">
        <section>
          <div className="my-3">
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href={`/${locale}/admin`} icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href={`/${locale}/admin/products`}>
                {" "}
                Products{" "}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="my-3 flex items-center justify-between">
            <div className="my-3">
              <h1 className="mb-3 text-4xl font-bold dark:text-gray-200">
                A list of all Products.
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Here you can see all the products you have created.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-4">
        <CustomTable
          data={products}
          columns={columns}
          CreateComponent={CreateProduct}
          filterby="description"
          filterValue="Product"
        />
      </div>
    </div>
  );
};

export default ProductsPage;
