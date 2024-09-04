import { Product, Feature, Specification } from "@prisma/client";

export type ProductWithDetails = Product & {
  features: Feature[];
  specifications: Specification[];
};

export const recipients = [
  {
    name: process.env.EMAIL_RECIPIENT_NAME1 || "",
    address: process.env.EMAIL_RECIPIENT_EMAIL1 || "",
  },
  {
    name: process.env.EMAIL_RECIPIENT_NAME2 || "",
    address: process.env.EMAIL_RECIPIENT_EMAIL2 || "",
  },
];