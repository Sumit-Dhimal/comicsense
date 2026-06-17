import Product from "../models/product.model.js";
import asyncHanlder from "express-async-handler"; // automatically call next(error)

// @desc    Register a new product
// @route   POST /api/products
// @access  Public
const registerProduct = asyncHanlder(async (req, res) => {
  const { name, description, price, image } = req.body;

  if (!name || !description || !price || !image) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const product = await Product.create({
    name,
    description,
    price,
    image,
  });

  res.status(201).json({
    message: "Product created",
    product: product
  });
});

// @desc    Get product
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHanlder(async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json({
    product: product
  });
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  private
const deleteProduct = asyncHanlder(async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json({
    message: "Product deleted",
    product: product
  });
});

// @desc    update product
// @route   PUT /api/products/:id
// @access  private
const updateProduct = asyncHanlder(async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const { name, description, price, image } = req.body;
  // product.name = name || product.name;
  // product.description = description || product.description;
  // product.price = price || product.price;
  // product.image = image || product.image;

  if (name !== undefined) product.name = name;
  if (description !== undefined) product.description = description;
  if (price !== undefined) product.price = price;
  if (image !== undefined) product.image = image;

  const updatedProduct = await product.save();

  res.status(200).json({
    message: "product updated successfully",
    product: updatedProduct
  })
});

export { registerProduct, getProduct, deleteProduct, updateProduct };