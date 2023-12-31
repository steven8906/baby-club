import {useContext, useState} from "react";
import AppContext from "../context/app-context";
import ProductModel from "../../data/models/product/product-model";

const productList: ProductModel[] = [
    {
        id: 0,
        pathImg: [
            "https://lh3.googleusercontent.com/L3bKEQmUQScdJNqPC647vFAmZ9mxhk8ODNZ4-IjJTSbFIBQQaQagRajZWlCD6Ea8UyVJpTaoxSMij4ZxtMgvhNfUQ9cBVGtcSzZ7694vlaMkScIB=s360",
            "https://babyclic.com/images_publicaciones/Publ__563__toallitas-humedas-acholchamax-x-160-repuesto-pequenin.png",
        ],
        value: 25400.58,
        name: "Pequeñín Acolchomax"
    },
    {
        id: 1,
        pathImg: ["https://i0.wp.com/mercaenlinea.nyc3.digitaloceanspaces.com/2018/10/pan%CC%83ales_pequen%CC%83in_etapa_2_30.png?fit=1000%2C1000&ssl=1"],
        value: 25400,
        name: "Pequeñín Extra Protección"
    },
    {
        id: 2,
        pathImg: ["https://www.patojitos.com.co/wp-content/uploads/2020/02/pequenin_premiumtouch_etapa1x50.png"],
        value: 25400,
        name: "Premium Touch"
    },
    {
        id: 3,
        pathImg: [
            "https://babycentercucuta.com/wp-content/uploads/2022/07/783338-800-auto.png",
            "https://babyclic.com/images_publicaciones/Publ__563__toallitas-humedas-acholchamax-x-160-repuesto-pequenin.png",
        ],
        value: 25400,
        name: "Pequeñín Acolchomax Pro"
    },
];
export function useProductsService(){
    const [productListState, setProductListState] = useState<ProductModel[]>([]);

    function getProducts():void{
        setProductListState(productList);
    }

    return{
        productListState,
        getProducts,
    }
}

export default ()=> useContext(AppContext);