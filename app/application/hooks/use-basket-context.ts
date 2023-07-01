import {useContext, useState} from "react";
import AppContext from "../context/app-context";

export const useBasket = ()=> {
    const [basketProductList, setBasketProductList] = useState<Array<number|string>>([]);

    const addProductToBasket = (productID: number|string)=> setBasketProductList(prevState => ([...prevState, productID]));
    const removeProductToBasket = (productID: number|string)=> setBasketProductList(prevState => {
        const restList = [...prevState].filter(x => x === productID);
        restList.shift();
        return [...restList, ...prevState.filter(x => x !== productID)];
    });
    const getProductCounter = (productID:number|string) => basketProductList.filter(x => x === productID).length;
    const removeAllProductToBasket = (productID:number|string) => setBasketProductList(prevState => ([...prevState].filter(x => x !== productID)))

    return {
        addProductToBasket,
        removeProductToBasket,
        getProductCounter,
        removeAllProductToBasket,
        basketProductList,
    }
}

export default ()=> useContext(AppContext);