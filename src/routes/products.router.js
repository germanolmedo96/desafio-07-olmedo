import { Router } from "express";
// import Products from "../dao/dbManager/products.js";
// import productsModel from "../dao/models/products.js";
import {getProducts, postProducts, putProduct, deleteProduct} from '../controllers/productsController.js'

const router = Router();
// const productsManager = new Products();

router.get('/' , getProducts)
    // let products = await productsManager.getAll();
    // console.log(products);
    // res.send({status:"success" , payload:products})
    
    router.post('/' ,postProducts )
    // const {title,description,price,code,quantity,category,thumbnail} = req.body;

    // let newProduct = {
    //     title,
    //     description,
    //     price,
    //     code,
    //     quantity,
    //     category,
    //     thumbnail
    // };

    // const result = await productsManager.saveProduct(newProduct);
    // res.send({status:"success" , payload:result});

    router.put('/:pid' , putProduct)
    // let id = req.params.pid;
    // const {title,description,price,code,quantity,category,thumbnail} = req.body;
    // let updateProduct = {
    //     title,
    //     description,
    //     price,
    //     code,
    //     quantity,
    //     category,
    //     thumbnail
    // };
    // let result = await productsManager.updateProduct(id,updateProduct)
    // res.send({status:"success" , payload:result})

router.delete('/:pid' , deleteProduct)
    // let id = req.params.pid;
    // let result = await productsManager.deleteProduct(id);
    // res.send({status:"success" , payload:result})

export default router;