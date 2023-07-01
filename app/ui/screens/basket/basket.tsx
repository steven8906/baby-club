import {ScrollView, View} from "react-native";
import useBasket from "../../../application/hooks/use-basket-context";
import useProductsService from "../../../application/services/use-products-service";
import dataConverts from "../../../cross-cutting/hepers/data-converts";
import {useEffect, useState} from "react";
import ProductModel from "../../../data/models/product/product-model";
import HorizontalCardProduct from "./components/horizontal-card-product";
import ButtonBlackPrimary from "../../components/buttons/button-black-primary";
import {shadows} from "../../../infrastructure/styles/theme";
import Swipelist from "react-native-swipeable-list-view";
import ButtonBlackPrimaryCustomizable from "../../components/buttons/button-black-primary-customizable";
import {Feather, MaterialIcons} from "@expo/vector-icons";
import dimensions from "../../../cross-cutting/hepers/dimensions";

export default function Basket({navigation}) {
    const [productBasket, setProductBasket]             = useState<ProductModel[]>([]);
    const {basketProductList, removeAllProductToBasket, getProductCounter} = useBasket();
    const {productList}                                 = useProductsService();

    function getBasketProducts(): void {
        const productIDs = dataConverts.arrayDuplicateFilter<string | number>(basketProductList);
        const productListFounded = productList.filter(x => productIDs.some(id => id === x.id));
        setProductBasket(productListFounded);
    }

    useEffect(() => {
        getBasketProducts();
    }, [])

    return <>
        <ScrollView  style={{flex: .8, paddingTop:10}}>
            <Swipelist
                data={productBasket}
                friction={1.8}
                renderRightItem={(data:ProductModel, index) => getProductCounter(data.id) > 0 && <HorizontalCardProduct product={data}/>}
                renderHiddenItem={(data, index) => <>
                    <View
                        style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 5, flexGrow: 1}}>
                        {/*<ButtonBlackPrimaryCustomizable callback={()=> null} width={60}>*/}
                        {/*    <MaterialIcons name="favorite" size={24} color="black" />*/}
                        {/*</ButtonBlackPrimaryCustomizable>*/}
                        <ButtonBlackPrimaryCustomizable callback={() => removeAllProductToBasket((data as ProductModel).id)}
                                                        width={60}>
                            <Feather name="trash" size={24} color="black"/>
                        </ButtonBlackPrimaryCustomizable>
                    </View>
                </>}
                rightOpenValue={dimensions.wp(50)}
            />
        </ScrollView>
        <View style={{flex: .2, justifyContent: 'center', alignItems: 'center', ...shadows.second}}>
            <ButtonBlackPrimary text={"Terminar compra"} callback={() => null}/>
        </View>
    </>
}