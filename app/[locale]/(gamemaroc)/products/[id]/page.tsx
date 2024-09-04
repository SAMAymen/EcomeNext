import db from "@/prisma/client";
import LandingPage from "./components/LandingPage";
import { revalidatePath } from "next/cache";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const product = await db.product.findUnique({
    where: { id: id as string },
    include: {
      features: true,
      specifications: true,
    },
  });

  revalidatePath(`/products/${id}`);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <LandingPage product={product} />;
};

export default ProductPage;
