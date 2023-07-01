import ProductModel from "../../../../data/models/product/product-model";
import {Image, View} from "react-native";
import dimensions from "../../../../cross-cutting/hepers/dimensions";
import basketHorizontalCardProductStyles from "../styles/basket-horizontal-card-product-styles";
import TextBold from "../../../components/text/text-bold";
import {AppColors} from "../../../../infrastructure/styles/theme";
import formatters from "../../../../cross-cutting/hepers/formatters";
import DualControl from "../../../components/buttons/dual-control";
import useBasketContext from "../../../../application/hooks/use-basket-context";

interface Props {
    product: ProductModel;
}

export default function HorizontalCardProduct({product}: Props) {
    const {addProductToBasket, removeProductToBasket, getProductCounter} = useBasketContext();

    return <>
        <View style={{alignItems: 'center'}}>
            <View style={basketHorizontalCardProductStyles.content}>
                <Image style={{
                    width: dimensions.wp(18),
                    height: dimensions.wp(18)
                }}
                       source={{uri: product.pathImg[0]}}/>
                <View style={basketHorizontalCardProductStyles.textDescriptionBox}>
                    <TextBold fontSize={18}>
                        {product.name}
                    </TextBold>
                    <View style={basketHorizontalCardProductStyles.numberControl}>
                        <TextBold fontSize={16} color={AppColors.primary}>
                            {formatters.currency(product.value)}   x
                        </TextBold>
                        <DualControl text={getProductCounter(product.id)}
                                     width={100}
                                     lessCallback={() => removeProductToBasket(product.id)}
                                     moreCallback={() =>
                                         addProductToBasket(product.id)}/>
                    </View>
                </View>
            </View>
        </View>
    </>
}