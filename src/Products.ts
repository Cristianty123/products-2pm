import Server from "./express/Server";
import ProductController from "./controller/ProductController";
import ProductView from "./view/ProductView";
import {ProductModel} from "./model/ProductModel";

const productModel = new ProductModel();
const productController = new ProductController(productModel);
const productView = new ProductView(productController);

const server = new Server(productView);
server.start();