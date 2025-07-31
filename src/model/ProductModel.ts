import ProductsDatabase from '../../database/products.json';
import ProductInterface from "../types/ProductInterface";

export class ProductModel{
    readonly retrieveProducts = async(): Promise<ProductInterface[]> =>{
        return new Promise ((resolve) =>{
            try{
                const products = ProductsDatabase as ProductInterface[];
                resolve(products);
            }catch (error){
                console.error('Error retrieving products:',error);
                resolve([]);
            }
        });
    }
}