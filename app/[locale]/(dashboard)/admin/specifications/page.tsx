import db from "@/prisma/client";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import CustomTable from "../components/CustomTable";
import { columns } from "./CustomColumns";
import { CreateSpecification } from "./CreateSpecification";
import { fetchProtectedPageData } from "../hooks/useProtectedPage";
import { useLocale } from "next-intl";

const SpecificationsPage = async () => {
  await fetchProtectedPageData();
  const locale = "en";
  const specifications = (await db.specification.findMany()) || [];

  return (
    <div>
      <div className="p-5">
        <section>
          <div className="my-3">
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href={`/${locale}/admin`} icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href={`/${locale}/admin/specifications`}>
                Specification
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="my-3 flex items-center justify-between">
            <div className="my-3">
              <h1 className="mb-3 text-4xl font-bold dark:text-gray-200">
                A list of all Specification.
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Here you can see all the specification you have created.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-4">
        <CustomTable
          data={specifications}
          columns={columns}
          CreateComponent={CreateSpecification}
          filterby="productId"
          filterValue="Product"
        />
      </div>
    </div>
  );
};

export default SpecificationsPage;
