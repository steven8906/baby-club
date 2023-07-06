import {Image, ImageBackground, StatusBar, View} from "react-native";
import sendingOrderStyles from "./styles/sending-order-styles";
import useAppContext from "../../../application/hooks/use-app-context";
import TextLight from "../../components/text/text-light";
import TextBold from "../../components/text/text-bold";
import formatters from "../../../cross-cutting/hepers/formatters";
import {AppColors} from "../../../infrastructure/styles/theme";
import appIcons from "../../../infrastructure/resources/app-icons";
import ButtonBlackPrimaryCustomizable from "../../components/buttons/button-black-primary-customizable";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";
import checkoutStyles from "../checkout/styles/checkout-styles";
import TextRegular from "../../components/text/text-regular";

export default function SendingOrder({navigation}){
    const { orderInfo } = useAppContext()

    return <>
        <View style={sendingOrderStyles.content}>
            <ImageBackground source={appIcons.map} resizeMode={'cover'} style={{flex:1}}/>
            <View style={sendingOrderStyles.info}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <View style={{flex:.2, alignItems:'center'}}>
                        <Image source={appIcons.timeOrderInfo} resizeMode={'contain'} style={{width:40}}/>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:.7, justifyContent:'center', gap:5, paddingHorizontal:10}}>
                            <TextLight fontSize={14}>
                                Fecha y hora del pedido
                            </TextLight>
                            <TextBold fontSize={14}>
                                {formatters.dateTimeToLocaleString(orderInfo.date)}
                            </TextBold>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:.2}}>
                        <View style={{width:60, alignItems:'center'}}>
                            <View style={{height:10, width:2, backgroundColor:AppColors.primary, marginVertical:3}}/>
                            <View style={{height:10, width:2, backgroundColor:AppColors.primary, marginVertical:3}}/>
                            <View style={{height:10, width:2, backgroundColor:AppColors.primary, marginVertical:3}}/>
                            <View style={{height:10, width:2, backgroundColor:AppColors.primary, marginVertical:3}}/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <View style={{flex:.2, alignItems:'center'}}>
                        <Image source={appIcons.location} resizeMode={'contain'} style={{width:40}}/>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:.7, justifyContent:'center', gap:5, paddingHorizontal:10}}>
                            <TextLight fontSize={14}>
                                Dirección de entrega del pedido
                            </TextLight>
                            <TextBold fontSize={14}>
                                {orderInfo.customerAddress}
                            </TextBold>
                        </View>
                    </View>
                </View>
                <View style={checkoutStyles.deliveryMan}>
                    <Image source={appIcons.avatarDeliveryMan} style={{height:60, width:60}}/>
                    <TextRegular fontSize={22}>
                        {orderInfo.deliveryMan}
                    </TextRegular>
                </View>
                <View style={{flexGrow:1, justifyContent:'flex-end', paddingVertical:20}}>
                    <ButtonBlackPrimaryCustomizable callback={()=> navigation.navigate(ConfigNavigation.home)}>
                        <TextBold fontSize={18}>
                            Ok
                        </TextBold>
                    </ButtonBlackPrimaryCustomizable>
                </View>
            </View>
        </View>
    </>
}