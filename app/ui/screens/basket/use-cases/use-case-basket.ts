import usePersistStorage from "../../../../application/hooks/use-persist-storage";
import DeliveryDataModel from "../../../../data/models/user/delivery-data-model";
import UserDataKeys from "../../../../data/keys/user-data-keys";
import dataConverts from "../../../../cross-cutting/hepers/data-converts";
import useBasketContext from "../../../../application/hooks/use-basket-context";
import {useEffect, useState} from "react";
import ProductModel from "../../../../data/models/product/product-model";
import useProductsService from "../../../../application/services/use-products-service";

export default function useCaseBasket() {
    const {getData}                                         = usePersistStorage();
    const {basketProductList,}                              = useBasketContext();
    const {productList}                                     = useProductsService();
    const [productBasket, setProductBasket]                 = useState<ProductModel[]>([]);
    const {checkExistDataByKey}                             = usePersistStorage();
    const [showDeliveryDataSheet, setShowDeliveryDataSheet] = useState<boolean>(false);

    useEffect(() => {
        getBasketProducts();
    }, [])

    async function getDeliveryData(): Promise<DeliveryDataModel> {
        return await getData<DeliveryDataModel>(UserDataKeys.deliveryDataKey) ?? {} as DeliveryDataModel;
    }

    function getBasketProducts(): void {
        const productIDs = dataConverts.arrayDuplicateFilter<string | number>(basketProductList);
        const productListFounded = productList.filter(x => productIDs.some(id => id === x.id));
        setProductBasket(productListFounded);
    }

    async function checkStepScreen() {
        !await checkExistDataByKey(UserDataKeys.deliveryDataKey) && setShowDeliveryDataSheet(true);
    }

    return {
        productBasket,
        showDeliveryDataSheet,
        setShowDeliveryDataSheet,
        checkStepScreen,
    }
}