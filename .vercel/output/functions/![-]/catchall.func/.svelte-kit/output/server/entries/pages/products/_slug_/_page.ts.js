import { error } from "@sveltejs/kit";
import { g as get_store_value } from "../../../../chunks/utils2.js";
import { p as products } from "../../../../chunks/products.js";
const load = ({ params }) => {
  const allProducts = get_store_value(products);
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) {
    throw error(404, "Product not found");
  }
  return {
    product
  };
};
export {
  load
};
