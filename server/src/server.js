import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import productRoutes from "./routes/product.route.js";

const app = express();

const PORT = process.env.PORT || 5000;
connectDB();

// body parser middlewares
app.use(express.json());
app.use(urlencoded({extended: true}));

// routes middlewares
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
})

// error handling middlewares
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})