import z, { number, object, string } from "zod";

export const CreateUserSchema = object({
  username: string({
    required_error: "Username is required",
    invalid_type_error: "Username is required",
  }).min(3, "Username is too short"),
  password: string({
    required_error: "Password is required",
    invalid_type_error: "Password is required",
  }).min(6, "Password is too short"),
  email: string({
    required_error: "Email is required",
    invalid_type_error: "Email is required",
  }).email(),
});

export const LoginUserSchema = object({
  password: string({
    required_error: "Password is required",
    invalid_type_error: "Password is required",
  }).min(6, "Password is too short"),
  email: string({
    required_error: "Email is required",
    invalid_type_error: "Email is required",
  }).email(),
});

export const ProductSchema = z.object({
  image: z.array(z.string(), {
    required_error: "Image is required",
    invalid_type_error: "Image should be an array of strings",
  }),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name is required",
    })
    .min(3, "Name is too short"),
  nameFr: z
    .string({
      required_error: "French name is required",
      invalid_type_error: "French name is required",
    })
    .min(3, "French name is too short"),
  nameAr: z
    .string({
      required_error: "Arabic name is required",
      invalid_type_error: "Arabic name is required",
    })
    .min(3, "Arabic name is too short"),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    })
    .min(3, "Description is too short"),
  descriptionFr: z
    .string({
      required_error: "French description is required",
      invalid_type_error: "French description is required",
    })
    .min(3, "French description is too short"),
  descriptionAr: z
    .string({
      required_error: "Arabic description is required",
      invalid_type_error: "Arabic description is required",
    })
    .min(3, "Arabic description is too short"),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price is required",
    })
    .positive(),
  stock: z
    .number({
      required_error: "Stock is required",
      invalid_type_error: "Stock is required",
    })
    .int()
    .positive(),
  active: z
    .boolean({
      required_error: "Active is required",
      invalid_type_error: "Active is required",
    })
    .default(false),
  featured: z
    .boolean({
      required_error: "Featured is required",
      invalid_type_error: "Featured is required",
    })
    .default(false),
});

export const FeatureSchema = z.object({
  content: z
    .string({
      required_error: "Content is required",
      invalid_type_error: "Content is required",
    })
    .min(3, "Content is too short"),
  contentFr: z
    .string({
      required_error: "French content is required",
      invalid_type_error: "French content is required",
    })
    .min(3, "French content is too short"),
  contentAr: z
    .string({
      required_error: "Arabic content is required",
      invalid_type_error: "Arabic content is required",
    })
    .min(3, "Arabic content is too short"),
  contentDetail: z
    .string({
      required_error: "Content detail is required",
      invalid_type_error: "Content detail is required",
    })
    .min(3, "Content detail is too short"),
  contentDetailFr: z
    .string({
      required_error: "French content detail is required",
      invalid_type_error: "French content detail is required",
    })
    .min(3, "French content detail is too short"),
  contentDetailAr: z
    .string({
      required_error: "Arabic content detail is required",
      invalid_type_error: "Arabic content detail is required",
    })
    .min(3, "Arabic content detail is too short"),
  icon: z.string({
    required_error: "Icon is required",
    invalid_type_error: "Icon is required",
  }),
  productId: z.string({
    required_error: "Product ID is required",
    invalid_type_error: "Product ID is required",
  }),
});

export const SpecificationSchema = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title is required",
  }),
  titleFr: z.string({
    required_error: "French title is required",
    invalid_type_error: "French title is required",
  }),
  titleAr: z.string({
    required_error: "Arabic title is required",
    invalid_type_error: "Arabic title is required",
  }),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description is required",
  }),
  descriptionFr: z.string({
    required_error: "French description is required",
    invalid_type_error: "French description is required",
  }),
  descriptionAr: z.string({
    required_error: "Arabic description is required",
    invalid_type_error: "Arabic description is required",
  }),
  media: z.array(z.string(), {
    required_error: "Media is required",
    invalid_type_error: "Media should be an array of strings",
  }),
  productId: z.string({
    required_error: "Product ID is required",
    invalid_type_error: "Product ID is required",
  }),
});

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const OrderSchema = z.object({
  customerName: z
    .string({
      required_error: "Customer name is required",
      invalid_type_error: "Customer name is required",
    })
    .min(3, "Customer name is too short"),
  customerPhone: z
    .string({
      required_error: "Customer phone is required",
      invalid_type_error: "Customer phone is required",
    })
    .regex(phoneRegex, "Invalid Number!")
    .min(10, "Phone number is too short"),
  shippingAddress: z
    .string({
      required_error: "Shipping address is required",
      invalid_type_error: "Shipping address is required",
    })
    .min(3, "Shipping address is too short"),
  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity is required",
    })
    .int(),
  paymentMethod: z.string({
    required_error: "Payment method is required",
    invalid_type_error: "Payment method is required",
  }),
});
