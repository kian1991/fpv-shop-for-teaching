import { z } from "zod";
import { categories, Category, Product } from "../types";
import { useForm } from "@tanstack/react-form";
import CreateArtwork from "../assets/artwork/create.svg";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const ProductFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
  price: z
    .string()
    .min(1, { message: "Price is required" })
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid price format" }),
  imageUrl: z.string().url({ message: "Invalid URL" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export function ProductAdd() {
  const navigate = useNavigate();
  const form = useForm({
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
    defaultValues: {
      name: "",
      category: "Electronics",
      description: "",
      price: "",
      imageUrl: "https://example.com/image.jpg",
    } as Omit<Product, "id">,
    validators: { onChange: ProductFormSchema },
  });

  return (
    <div className="bg-base-100 min-h-screen pt-24">
      <div className="relative mx-auto max-w-2xl">
        <button
          className="btn btn-secondary absolute ml-2 rounded-full p-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={14} />
        </button>
        <img
          src={CreateArtwork}
          alt="Create Artork"
          className="mx-auto mt-12 h-[200px]"
        />
        <h1 className="mt-6 text-center text-3xl font-bold">
          Create a new Product
        </h1>
        <form
          className="mt-12 flex w-full flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          <form.Field
            name="name"
            children={(field) => (
              <div className="flex flex-col">
                <label className="label" htmlFor={field.name}>
                  Name
                </label>
                <input
                  className="input w-full"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
          <form.Field
            name="description"
            children={(field) => (
              <div className="flex flex-col">
                <label className="label" htmlFor={field.name}>
                  Description
                </label>
                <input
                  className="input w-full"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
          <form.Field
            name="imageUrl"
            children={(field) => (
              <div className="flex flex-col">
                <label className="label" htmlFor={field.name}>
                  Image URL
                </label>
                <input
                  className="input w-full"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
          <form.Field
            name="price"
            children={(field) => (
              <div className="flex flex-col">
                <label className="label" htmlFor={field.name}>
                  Price
                </label>
                <input
                  className="input w-full"
                  type="number"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
          <form.Field
            name="category"
            children={(field) => (
              <div className="flex flex-col">
                <label className="label" htmlFor={field.name}>
                  Category
                </label>
                <select
                  className="select w-full"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) =>
                    field.handleChange(e.target.value as Category)
                  }
                >
                  {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            )}
          />
          <button className="btn btn-primary mt-6">Submit</button>
        </form>
      </div>
    </div>
  );
}
