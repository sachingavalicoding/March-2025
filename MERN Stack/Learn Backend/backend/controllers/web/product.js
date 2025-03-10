import Product from "../../models/product.model.js";

export const addProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = new Product({ name, price });

        await product.save();
        res.status(201).send({ status: 1, message: "Product added" });
    } catch (err) {
        res.status(500).send({ status: 0, message: `Error in product add: ${err.message}` });
    }
};

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const product = await Product.find({id:Number(id)});

        if (!product) {
            return res.status(404).send({ status: 0, message: "Product not found" });
        }

        res.status(200).send({ status: 1, message: "Product retrieved", data: product });
    } catch (error) {
        res.status(500).send({ status: 0, message: `Error in getting product: ${error.message}` });
    }
};

export const getProducts = async (req , res) => {
    try {
        const products =await Product.find();
        if(!products){
            res.status(404).send({status:0,message:"No Products Founds"});
        }
        res.status(200).send({status:1 , message : "Products retrived",data:products});
    } catch (error) {
        res.status(500).send({status:0,message:`Error in getting products ${error}`});
    }
}