import { createSlug, getRandomUniqueId } from "../helpers/helpers.js";
import fs from "fs";

// all products
export const get_all_products = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("./db/product.json").toString());
  if (productData.length === 0) {
    return res.status(400).json({ message: "no product found" });
  }
  res.status(200).json(productData);
};

// create product
export const create_product = (req, res) => {
  const { name, regularPrice, salePrice, stock } = req.body;

  if (!name || !regularPrice) {
    return res.status(400).json({ message: "name and regularPrice is required" });
  }

  const productData = JSON.parse(fs.readFileSync("./db/product.json").toString());

  // product slug check
  if (productData.some((data) => data.slug === createSlug(name))) {
    return res.status(400).json({ message: "product slug already exist" });
  }

  const product = {
    id: getRandomUniqueId(),
    name,
    slug: createSlug(name),
    regularPrice,
    salePrice,
    stock,
    photo: req.file.filename,
  };

  productData.push(product);
  res.status(200).json({
    product,
    message: "product created",
  });

  fs.writeFileSync("./db/product.json", JSON.stringify(productData));
};

// Show single product
export const get_single_product = (req, res) => {
  const { slug } = req.params;
  const productData = JSON.parse(fs.readFileSync("./db/product.json").toString());
  const sinlgeProduct = productData.find((data) => data.slug === slug);
  if (!sinlgeProduct) {
    return res.status(400).json({ message: "product not found" });
  }
  res.status(200).json(sinlgeProduct);
};

// delete product
export const delete_product = (req, res) => {
  const { id } = req.params;
  const productData = JSON.parse(fs.readFileSync("./db/product.json").toString());

  const updatedProduct = productData.filter((data) => data.id !== id);
  fs.writeFileSync("./db/product.json", JSON.stringify(updatedProduct));
  res.status(200).json({ message: "product deleted" });
};
