import React from "react";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";

export default interface AppContextModel {
    screen                : ConfigNavigation;
    setScreen             : React.Dispatch<React.SetStateAction<ConfigNavigation>>;
    basketProductList     : Array<number | string>;
    addProductToBasket    : CallableFunction;
    removeProductToBasket : CallableFunction;
    getProductCounter     : CallableFunction;
}
