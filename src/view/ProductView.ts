import {Router} from "express";
import ProductController from "../controller/ProductController";

export default class ProductView{
    router:Router;

    constructor(private readonly productController: ProductController) {
        this.router = Router();
        this.routes();
    }


    readonly routes = ():void => {
        this.router.get('/products',this.productController.getProducts);
        this.router.get('/products//products/:id',this.productController.getProductById);
    }
}