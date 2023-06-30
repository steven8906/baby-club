import {Image, TouchableOpacity, View} from "react-native";
import cardProductStyles from "./styles/card-product-styles";
import TextBold from "../text/text-bold";
import TextMedium from "../text/text-medium";
import {AppColors} from "../../../infrastructure/styles/theme";
import ProductModel from "../../../data/models/product/product-model";
import formatters from "../../../cross-cutting/hepers/formatters";

type CardProductType = Partial<ProductModel> & { callbackOnPress:()=> void };

export default function CardProduct({name, pathImg, value, callbackOnPress}: CardProductType) {
    return <>
        <TouchableOpacity activeOpacity={.8}
                          onPress={callbackOnPress}
                          style={{marginRight: 15}}>
            <View>
                <View style={cardProductStyles.box}>
                    <View style={cardProductStyles.boxImage}>
                        <Image style={cardProductStyles.image} source={{uri: pathImg[0]}}/>
                    </View>
                    <View style={{marginTop: 15}}>
                        <View style={cardProductStyles.boxText}>
                            <TextMedium fontSize={18}>
                                {name}
                            </TextMedium>
                            <TextBold fontSize={16} color={AppColors.primary}>
                                {formatters.currency(value)}
                            </TextBold>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </>
}