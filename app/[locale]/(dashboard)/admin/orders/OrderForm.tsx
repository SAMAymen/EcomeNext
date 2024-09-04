"use client";

import ErrorMessage from "@/components/ErrorMessage";
import type { Order, Product } from "@prisma/client";
import { Label, Select, Textarea, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import type { FieldErrors } from "react-hook-form";
import axios from "axios";

interface Props {
  errors: FieldErrors<Order>;
  order?: Order;
  register: any;
}

const OrderForm: React.FC<Props> = ({ errors, order, register }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >(order?.productId);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/admin/products"); // Adjust the endpoint as needed
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="w-full">
        <Label
          htmlFor="productId"
          value="Select Product"
          className="mb-2 block"
        />
        <Select
          id="productId"
          value={selectedProductId}
          {...register("productId", {
            value: selectedProductId, // Register the value explicitly
          })}
          onChange={(e) => setSelectedProductId(e.target.value)}
        >
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </Select>
        {errors.productId && (
          <ErrorMessage>{String(errors.productId?.message)}</ErrorMessage>
        )}
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <Label htmlFor="quantity" value="Quantity" className="mb-2 block" />
          <TextInput
            id="quantity"
            type="number"
            defaultValue={order?.quantity || 0}
            {...register("quantity", {
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Quantity must be at least 1",
              },
            })}
            placeholder="Quantity"
          />
          {errors.quantity && (
            <ErrorMessage>{String(errors.quantity?.message)}</ErrorMessage>
          )}
        </div>

        <div className="w-full">
          <Label
            htmlFor="totalPrice"
            value="Total Price"
            className="mb-2 block"
          />
          <TextInput
            id="totalPrice"
            type="number"
            step="0.01"
            defaultValue={order?.totalPrice || 0}
            {...register("totalPrice")}
            placeholder="Total Price"
          />
          {errors.totalPrice && (
            <ErrorMessage>{String(errors.totalPrice?.message)}</ErrorMessage>
          )}
        </div>

        <div className="w-full">
          <Label htmlFor="discount" value="Discount" className="mb-2 block" />
          <TextInput
            id="discount"
            type="number"
            step="0.01"
            defaultValue={order?.discount || 0}
            {...register("discount")}
            placeholder="Discount"
          />
          {errors.discount && (
            <ErrorMessage>{String(errors.discount?.message)}</ErrorMessage>
          )}
        </div>
      </div>

      <div className="w-full">
        <Label htmlFor="status" value="Order Status" className="mb-2 block" />
        <Select id="status" {...register("status")}>
          <option value="pending" selected={order?.status === "pending"}>
            Pending
          </option>
          <option value="shipped" selected={order?.status === "shipped"}>
            Shipped
          </option>
          <option value="delivered" selected={order?.status === "delivered"}>
            Delivered
          </option>
        </Select>
        {errors.status && (
          <ErrorMessage>{String(errors.status?.message)}</ErrorMessage>
        )}
      </div>

      <div className="w-full">
        <Label
          htmlFor="shippingAddress"
          value="Shipping Address"
          className="mb-2 block"
        />
        <Textarea
          id="shippingAddress"
          defaultValue={order?.shippingAddress || ""}
          {...register("shippingAddress")}
          placeholder="Shipping Address"
          shadow
        />
        {errors.shippingAddress && (
          <ErrorMessage>{String(errors.shippingAddress?.message)}</ErrorMessage>
        )}
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <Label
            htmlFor="paymentMethod"
            value="Payment Method"
            className="mb-2 block"
          />
          <Select id="paymentMethod" {...register("paymentMethod")}>
            <option
              value="cash_on_delivery"
              selected={order?.paymentMethod === "cash_on_delivery"}
            >
              Cash on Delivery
            </option>
            <option
              value="credit_card"
              selected={order?.paymentMethod === "credit_card"}
            >
              Credit Card
            </option>
            {/* Add more payment methods if needed */}
          </Select>
          {errors.paymentMethod && (
            <ErrorMessage>{String(errors.paymentMethod?.message)}</ErrorMessage>
          )}
        </div>

        <div className="w-full">
          <Label
            htmlFor="paymentStatus"
            value="Payment Status"
            className="mb-2 block"
          />
          <Select id="paymentStatus" {...register("paymentStatus")}>
            <option value="unpaid" selected={order?.paymentStatus === "unpaid"}>
              Unpaid
            </option>
            <option value="paid" selected={order?.paymentStatus === "paid"}>
              Paid
            </option>
          </Select>
          {errors.paymentStatus && (
            <ErrorMessage>{String(errors.paymentStatus?.message)}</ErrorMessage>
          )}
        </div>
      </div>

      <div className="w-full">
        <Label
          htmlFor="customerName"
          value="Customer Name"
          className="mb-2 block"
        />
        <TextInput
          id="customerName"
          defaultValue={order?.customerName || ""}
          {...register("customerName")}
          placeholder="Customer Name"
        />
        {errors.customerName && (
          <ErrorMessage>{String(errors.customerName?.message)}</ErrorMessage>
        )}
      </div>

      <div className="w-full">
        <Label
          htmlFor="customerPhone"
          value="Customer Phone"
          className="mb-2 block"
        />
        <TextInput
          id="customerPhone"
          defaultValue={order?.customerPhone || ""}
          {...register("customerPhone")}
          placeholder="Customer Phone"
        />
        {errors.customerPhone && (
          <ErrorMessage>{String(errors.customerPhone?.message)}</ErrorMessage>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
