import React from "react";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";
import ProductModel from "../product/product-model";
import OrderStates from "../../../cross-cutting/constants/order-states";
import OrderInfoModel from "../basket/order-info-model";

export default interface AppContextModel {
    screen                   : ConfigNavigation;
    setScreen                : React.Dispatch<React.SetStateAction<ConfigNavigation>>;
    basketProductList        : Array<number | string>;
    addProductToBasket       : (productID: number | string) => void;
    removeProductToBasket    : (productID: number | string) => void;
    getProductCounter        : (productID: number | string) => number;
    removeAllProductToBasket : (productID: number | string) => void;
    productList              : ProductModel[];
    getProducts              : () => void;
    getTotal                 : ()=> number;
    stateOrder               : OrderStates;
    changeBasketState        : (state: OrderStates)=> void;
    setStateOrderInfo        : ()=> void;
    orderInfo                : OrderInfoModel;
}
