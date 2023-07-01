import {ScrollView, View} from "react-native";
import useBasket from "../../../application/hooks/use-basket-context";
import ProductModel from "../../../data/models/product/product-model";
import HorizontalCardProduct from "./components/horizontal-card-product";
import ButtonBlackPrimary from "../../components/buttons/button-black-primary";
import {shadows} from "../../../infrastructure/styles/theme";
import Swipelist from "react-native-swipeable-list-view";
import ButtonBlackPrimaryCustomizable from "../../components/buttons/button-black-primary-customizable";
import {Feather} from "@expo/vector-icons";
import dimensions from "../../../cross-cutting/hepers/dimensions";
import useCaseBasket from "./use-cases/use-case-basket";
import CustomBottomSheet from "../../components/bottom-sheet/custom-bottom-sheet";
import TextRegular from "../../components/text/text-regular";
import DeliveryDataForm from "./components/delivery-data-form";

export default function Basket({navigation}) {
    const {
        productBasket,
        showDeliveryDataSheet,
        setShowDeliveryDataSheet,
        checkStepScreen
    } = useCaseBasket();
    const {
        removeAllProductToBasket,
        getProductCounter
    } = useBasket();

    return <>
        <ScrollView style={{flex: .8, paddingTop:10}}>
            <Swipelist
                data={productBasket}
                friction={1.8}
                renderRightItem={(data:ProductModel, _) => getProductCounter(data.id) > 0 && <HorizontalCardProduct product={data}/>}
                renderHiddenItem={(data, _) => <>
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
            <ButtonBlackPrimary text={"Terminar compra"} callback={checkStepScreen}/>
        </View>
        <CustomBottomSheet visible={showDeliveryDataSheet} setVisible={setShowDeliveryDataSheet} height={dimensions.hp(50)}>
            <DeliveryDataForm/>
        </CustomBottomSheet>
    </>
}