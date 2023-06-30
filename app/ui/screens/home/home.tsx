import {Dimensions, PixelRatio, ScrollView, View} from "react-native";
import LayoutSafeArea from "../../components/layout/layout-safe-area";
import TextBold from "../../components/text/text-bold";
import TextInputSearch from "../../components/inputs/text-input-search";
import CategoryList from "../../components/categories/category-list";
import CardProduct from "../../components/card-product/card-product";
import ProductModel from "../../../data/models/product/product-model";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";
import dimensions from "../../../cross-cutting/hepers/dimensions";

export default function Home({navigation}) {
    const productList: ProductModel[] = [
        {
            id: 0,
            pathImg: [
                "https://lh3.googleusercontent.com/L3bKEQmUQScdJNqPC647vFAmZ9mxhk8ODNZ4-IjJTSbFIBQQaQagRajZWlCD6Ea8UyVJpTaoxSMij4ZxtMgvhNfUQ9cBVGtcSzZ7694vlaMkScIB=s360",
                "https://babyclic.com/images_publicaciones/Publ__563__toallitas-humedas-acholchamax-x-160-repuesto-pequenin.png",
            ],
            value: 25400.58,
            name: "Pequeñín Acolchomax"
        },
        {
            id: 1,
            pathImg: ["https://i0.wp.com/mercaenlinea.nyc3.digitaloceanspaces.com/2018/10/pan%CC%83ales_pequen%CC%83in_etapa_2_30.png?fit=1000%2C1000&ssl=1"],
            value: 25400,
            name: "Pequeñín Extra Protección"
        },
        {
            id: 2,
            pathImg: ["https://www.patojitos.com.co/wp-content/uploads/2020/02/pequenin_premiumtouch_etapa1x50.png"],
            value: 25400,
            name: "Premium Touch"
        },
        {
            id: 3,
            pathImg: [
                "https://babycentercucuta.com/wp-content/uploads/2022/07/783338-800-auto.png",
                "https://babyclic.com/images_publicaciones/Publ__563__toallitas-humedas-acholchamax-x-160-repuesto-pequenin.png",
            ],
            value: 25400,
            name: "Pequeñín Acolchomax Pro"
        },
    ];

    return <>
        <LayoutSafeArea>
            <View style={{flex: dimensions.hp(50),padding: 20, justifyContent:'flex-end'}}>
                <View style={{width: '70%', marginTop: 25}}>
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
            <View  style={{flex:dimensions.hp(50), paddingHorizontal:20}}>
                <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                    {productList.map((product, index) =>
                        <View key={`product-${index}`} style={{justifyContent:'center'}}>
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