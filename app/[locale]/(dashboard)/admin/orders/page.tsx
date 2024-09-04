import React from "react";
import db from "@/prisma/client";
import { Breadcrumb } from "flowbite-react";
import CustomTable from "../components/CustomTable";
import { HiHome } from "react-icons/hi";
import { columns } from "./CustomColumns";
import { fetchProtectedPageData } from "../hooks/useProtectedPage";

const OrdersPage = async () => {
  await fetchProtectedPageData();
  const locale = "en";
  const orders = (await db.order.findMany()) || [];
  return (
    <div>
      <div className="p-5">
        <section>
          <div className="my-3">
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href={`/${locale}/admin`} icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href={`/${locale}/admin/orders`}>
                {" "}
                Orders{" "}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="my-3 flex items-center justify-between">
            <div className="my-3">
              <h1 className="mb-3 text-4xl font-bold dark:text-gray-200">
                A list of all Orders.
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Here you can see all the orders you have created.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-4">
        <CustomTable
          data={orders}
          columns={columns}
          filterby="customerPhone"
          filterValue="Phone"
        />
      </div>
    </div>
  );
};

export default OrdersPage;
