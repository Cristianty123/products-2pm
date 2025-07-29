import express, {Application} from "express";
import ProductView from "../view/ProductView";

export default class Server{
    private readonly app: Application;
    private readonly productView: ProductView;

    constructor() {
        this.app = express();
        this.productView = new ProductView();
        this.routes();
    }

    readonly routes = (): void =>{
        this.app.use('/',this.productView.router);
    }
    readonly start = ():void =>{
        this.app.listen(1802,() =>{
            console.log("Server is running on port 1802");
        });
    }
}