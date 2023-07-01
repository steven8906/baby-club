import {Image, View} from "react-native";
import CleanLayout from "../../components/layout/clean-layout";
import productDetailStyle from "./styles/product-detail-style";
import ProductModel from "../../../data/models/product/product-model";
import Carousel from "../../components/carousel/carousel";
import TextBold from "../../components/text/text-bold";
import formatters from "../../../cross-cutting/hepers/formatters";
import {AppColors} from "../../../infrastructure/styles/theme";
import Divider from "../../components/divider/divider";
import TextMedium from "../../components/text/text-medium";
import TextLight from "../../components/text/text-light";
import dimensions from "../../../cross-cutting/hepers/dimensions";
import useBasket from "../../../application/hooks/use-basket-context";
import {Badge} from "react-native-paper";
import ButtonBlackPrimaryCustomizable from "../../components/buttons/button-black-primary-customizable";
import {Ionicons} from "@expo/vector-icons";

export default function ProductDetail({navigation, route}) {
    const {product}: { product: ProductModel } = route.params;
    const {
        basketProductList,
        addProductToBasket,
        getProductCounter,
        removeProductToBasket
    } = useBasket();

    const carouselElements = [...product.pathImg].map((path, index) => <>
        <Image key={`product-img-${index}`}
               style={productDetailStyle.image}
               source={{uri: path}}/>
    </>);

    function addProduct() {
        addProductToBasket(product.id);
    }

    function removeProduct() {
        removeProductToBasket(product.id);
    }

    return <>
        <CleanLayout>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                <View style={productDetailStyle.content}>
                    <View style={productDetailStyle.boxImage}>
                        <Carousel elements={carouselElements}/>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 0.3, alignItems: 'center', paddingHorizontal: 15}}>
                        <Badge style={{
                            position: 'absolute',
                            right: dimensions.wp(5),
                            top: dimensions.wp(0),
                            backgroundColor: AppColors.primary
                        }} size={25} disabled={true} visible={getProductCounter(product.id) > 0}>
                            {getProductCounter(product.id)}
                        </Badge>
                        <TextBold fontSize={25}>
                            {product.name}
                        </TextBold>
                        <TextBold fontSize={22} color={AppColors.primary}>
                            {formatters.currency(product.value)}
                        </TextBold>
                    </View>
                    <View style={{flex: .3, padding: 25}}>
                        <TextMedium fontSize={18}>
                            Información del producto
                        </TextMedium>
                        <Divider width={dimensions.wp(20)}/>
                        <View style={{paddingTop: 15}}>
                            <TextLight fontSize={16}>
                                Información del producto
                            </TextLight>
                        </View>
                    </View>
                    <View style={{flexGrow: .4, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: dimensions.wp(100),
                            gap: 15,
                        }}>
                            {basketProductList.length > 0 && <>
                                <ButtonBlackPrimaryCustomizable callback={removeProduct} width={60}>
                                    <Ionicons name="md-remove" size={24} color="black"/>
                                </ButtonBlackPrimaryCustomizable>
                            </>}
                            <ButtonBlackPrimaryCustomizable text={"Agregar al carrito"} callback={addProduct}
                                                            width={180}/>
                        </View>
                    </View>
                </View>
            </View>
        </CleanLayout>
    </>
}