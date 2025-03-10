import express from "express";
import { addProduct, getProduct, getProducts } from "../../controllers/web/product.js";

const productRouter = express.Router();
productRouter.post("/add",addProduct);
productRouter.get("/get/:id",getProduct);
productRouter.get("/getall",getProducts);
export default productRouter;