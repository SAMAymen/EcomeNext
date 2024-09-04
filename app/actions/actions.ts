"use server";

import { revalidatePath } from "next/cache";

// revalidateProducts;
export async function revalidateProducts() {
  revalidatePath("/admin/products");
}

// revalidateOrders;
export async function revalidateOrders() {
  revalidatePath("/admin/orders");
}

// revalidateFeatures;
export async function revalidateFeatures() {
  revalidatePath("/admin/features");
}

// revalidateSpecifications;
export async function revalidateSpecifications() {
  revalidatePath("/admin/specifications");
}
