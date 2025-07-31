import express, {Application} from "express";
import ProductView from "../view/ProductView";

export default class Server{
    private readonly app: Application;

    constructor(private readonly productView: ProductView) {
        this.app = express();
        this.routes();
    }

    readonly routes = (): void =>{
        this.app.use('/shop',this.productView.router);
    }
    readonly start = ():void =>{
        this.app.listen(1802,() =>{
            console.log("Server is running at http://localhost:1802");
        });
    }
}