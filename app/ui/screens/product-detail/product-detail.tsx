import {Image, Text, View} from "react-native";
import CleanLayout from "../../components/layout/clean-layout";
import productDetailStyle from "./styles/product-detail-style";
import ProductModel from "../../../data/models/product/product-model";
import Carousel from "../../components/carousel/carousel";

export default function ProductDetail({navigation, route}) {
    const {product}: { product: ProductModel } = route.params;

    const carouselElements = [...product.pathImg].map((path, index) => <>
        <Image key={`product-img-${index}`}
               style={productDetailStyle.image}
               source={{uri: path}}/>
    </>)
    return <>
        <CleanLayout>
            <View style={productDetailStyle.content}>
                <View style={productDetailStyle.boxImage}>
                    <Carousel elements={carouselElements}/>
                </View>
                <View></View>
            </View>
        </CleanLayout>
    </>
}