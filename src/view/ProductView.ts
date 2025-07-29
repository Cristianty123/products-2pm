import {Router} from "express";

export default class ProductView{
    router:Router;

    constructor() {
        this.router = Router();
        this.routes();
    }


    readonly routes = ():void => {
        this.router.get('/', (_req,res) =>{
            res.send('Product View');
        });
    }
}