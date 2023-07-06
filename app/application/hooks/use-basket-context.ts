import {useContext, useState} from "react";
import AppContext from "../context/app-context";
import ProductModel from "../../data/models/product/product-model";
import OrderStates from "../../cross-cutting/constants/order-states";
import OrderInfoModel from "../../data/models/basket/order-info-model";

export const useBasket = (productListState:ProductModel[]) => {
    const [basketProductList, setBasketProductList] = useState<Array<number | string>>([]);
    const [stateOrder, setOrderState]               = useState<OrderStates>(OrderStates.creating);
    const [orderInfo, setOrderInfo]                 = useState<OrderInfoModel>({} as OrderInfoModel);

    const addProductToBasket = (productID: number | string) => {
        setOrderState(OrderStates.creating);
        return setBasketProductList(prevState => ([...prevState, productID]));
    }
    const removeProductToBasket = (productID: number | string) => setBasketProductList(prevState => {
        setOrderState(OrderStates.creating);
        const restList = [...prevState].filter(x => x === productID);
        restList.shift();
        return [...restList, ...prevState.filter(x => x !== productID)];
    });
    const getProductCounter = (productID: number | string) => basketProductList.filter(x => x === productID).length;
    const removeAllProductToBasket = (productID: number | string) => setBasketProductList(prevState => ([...prevState].filter(x => x !== productID)))

    function getTotal(): number {
        let total = 0;
        basketProductList.forEach(productId => total += productListState.find(x => x.id === productId)?.value ?? 0);
        return total;
    }

    function changeBasketState(state: OrderStates):void {
        setOrderState(state);
    }

    function setStateOrderInfo():void {
        const model:OrderInfoModel = {
            basketProductList,
            date: new Date(),
            deliveryMan: 'Edward Hernández',
            customerAddress:'CRA 42H #87-213',
        }
        setOrderInfo(model);
    }

    return {
        addProductToBasket,
        removeProductToBasket,
        getProductCounter,
        removeAllProductToBasket,
        getTotal,
        changeBasketState,
        setStateOrderInfo,
        basketProductList,
        stateOrder,
        orderInfo,
    }
}

export default () => useContext(AppContext);