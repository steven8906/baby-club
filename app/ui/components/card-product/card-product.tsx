import {Image, TouchableOpacity, View} from "react-native";
import cardProductStyles from "./styles/card-product-styles";
import TextBold from "../text/text-bold";
import TextMedium from "../text/text-medium";
import {Colors} from "../../../infrastructure/resources/styles/theme";
import ProductModel from "../../../data/models/product/product-model";

export default function CardProduct({name, pathImg, value}: Partial<ProductModel>) {
    return <>
        <TouchableOpacity activeOpacity={.8} style={{marginRight: 15}}>
            <View>
                <View style={cardProductStyles.box}>
                    <View style={cardProductStyles.boxImage}>
                        <Image style={cardProductStyles.image} source={{uri: pathImg}}/>
                    </View>
                    <View style={{marginTop: 15}}>
                        <View style={cardProductStyles.boxText}>
                            <TextMedium fontSize={22}>
                                {name}
                            </TextMedium>
                            <TextBold fontSize={18} color={Colors.primary}>
                                {value}
                            </TextBold>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </>
}