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
    readonly retrieveProductsById = async (id: string): Promise<ProductInterface> =>{
            try{
                const products = await this.retrieveProducts();
                const product = products.find((product) => String(product.id) === id);
                if(!product){
                    console.error(`Product with ID ${id} not found`);
                    return NullProduct;
                }else{
                    return product;
                }
            }catch (error){
                console.error('Error retrieving products:',error);
                return NullProduct;
            }
    }
    readonly retrieveProductWithDiscountUnderTenEurs = async(): Promise<ProductInterface[]> =>{
        try{
            const products = await this.retrieveProducts();
            return products.filter(product => product.discount && product.price < 10);
        }catch (error){
            console.error('Error retrieving products:',error);
            return [];
        }
    }
}

export const NullProduct: ProductInterface ={
    id: 0,
    title: '',
    amount: '',
    price: 0,
    description: '',
    favorite: false,
    discount: false,
    discountPer: 0,
    discountUni: ''
}