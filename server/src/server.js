import "dotenv/config";
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();

const PORT = process.env.PORT || 5000;
connectDB();
app.use(cors({ 
  origin: "http://localhost:5173",
  credentials: true,
}));

// body parser middlewares
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cookieParser()); 

// routes middlewares
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
})

// error handling middlewares
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})