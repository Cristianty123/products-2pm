import { Request, Response} from 'express';
import {ProductModel} from "../model/ProductModel";

export default class ProductController{
    constructor(private readonly productModel: ProductModel) {
    }
    readonly getProducts = async (_req: Request, res: Response): Promise<void> =>{
        const productList = await this.productModel.retrieveProducts();
        if(!productList) res.status(204).json({message: 'No products found'})
        res.status(200).json(productList);
    }
    readonly getProductById = async (_req: Request, res: Response): Promise<void> =>{
        const id = _req.params['id'];
        if(!id){
            res.status(403).json({message: 'invalid product ID'});
            return;
        }
        const product = await this.productModel.retrieveProductsById(id);
        if(!product) res.status(204).json({message: 'No products found'})
        res.status(200).json(product);
    }

    readonly getProductWithDiscountUnderTenEurs = async (_req: Request, res: Response): Promise<void> =>{
        const productList = await this.productModel.retrieveProductWithDiscountUnderTenEurs();
        if(!productList) res.status(204).json({message: 'No products found'})
        res.status(200).json(productList);
    }
}