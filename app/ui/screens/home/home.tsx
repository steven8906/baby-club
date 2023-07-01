import {ScrollView, View} from "react-native";
import LayoutSafeArea from "../../components/layout/layout-safe-area";
import TextBold from "../../components/text/text-bold";
import TextInputSearch from "../../components/inputs/text-input-search";
import CategoryList from "../../components/categories/category-list";
import CardProduct from "../../components/card-product/card-product";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";
import dimensions from "../../../cross-cutting/hepers/dimensions";
import useBasket from "../../../application/hooks/use-basket-context";
import {Badge} from "react-native-paper";
import {AppColors} from "../../../infrastructure/styles/theme";
import useProductsService from "../../../application/services/use-products-service";

export default function Home({navigation}) {
    const { getProductCounter } = useBasket();
    const { productList } = useProductsService();
    return <>
        <LayoutSafeArea navigation={navigation}>
            <View style={{flex: dimensions.hp(45),padding: 20, justifyContent:'flex-end'}}>
                <View style={{width: '70%'}}>
                    <TextBold fontSize={34}>
                        Lo que necesitas para tu bebé
                    </TextBold>
                </View>
                <View style={{marginTop: 25}}>
                    <TextInputSearch placeholder={"Busca tu producto..."}/>
                </View>
                <View>
                    <CategoryList/>
                </View>
            </View>
            <View  style={{flex:dimensions.hp(50), paddingHorizontal:20
            }}>
                <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                    {productList.map((product, index) =>
                        <View key={`product-${index}`} style={{justifyContent:'center'}}>
                            <Badge style={{
                                backgroundColor: AppColors.primary
                            }} size={25} disabled={true} visible={getProductCounter(product.id) > 0}>
                                {getProductCounter(product.id)}
                            </Badge>
                            <CardProduct name={product.name}
                                         value={product.value}
                                         pathImg={product.pathImg}
                                         callbackOnPress={() => navigation.navigate(ConfigNavigation.productDetail, {product})}/>
                        </View>)}
                </ScrollView>
            </View>
        </LayoutSafeArea>
    </>
}