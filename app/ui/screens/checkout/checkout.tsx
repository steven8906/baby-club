import {Image, View} from "react-native";
import checkoutStyles from "./styles/checkout-styles";
import TextBold from "../../components/text/text-bold";
import {RadioButton} from "react-native-paper";
import {useState} from "react";
import appIcons from "../../../infrastructure/resources/app-icons";
import TextMedium from "../../components/text/text-medium";
import Divider from "../../components/divider/divider";
import useBasketContext from "../../../application/hooks/use-basket-context";
import formatters from "../../../cross-cutting/hepers/formatters";
import ButtonBlackPrimaryCustomizable from "../../components/buttons/button-black-primary-customizable";
import OrderStates from "../../../cross-cutting/constants/order-states";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";
import dimensions from "../../../cross-cutting/hepers/dimensions";

export default function Checkout({navigation}) {
    const [method, setMethod]           = useState<'cash' | 'payment-methods' | ''>('');
    const {getTotal, changeBasketState, setStateOrderInfo} = useBasketContext();

    function sendOrder() {
        changeBasketState(OrderStates.sending);
        setStateOrderInfo();
        navigation.navigate(ConfigNavigation.sendingOrder);
    }

    return <>
        <View style={checkoutStyles.content}>
            <View style={{flex:1, justifyContent:'space-between'}}>
                <View>
                    <TextBold fontSize={32}>Información de pago</TextBold>
                </View>
                <View style={{gap: 10}}>
                    <TextMedium fontSize={18}>Su método de pago</TextMedium>
                    <Divider width={80}/>
                </View>
                <View>
                    <RadioButton.Group onValueChange={value => setMethod(value as 'cash' | 'payment-methods' | '')}
                                       value={method}>
                        <View style={checkoutStyles.itemMethod}>
                            <Image source={appIcons.cash} style={{width: 40, height: 40}}/>
                            <RadioButton.Item style={{width: dimensions.wp('68%')}}
                                              value={'cash'}
                                              status={'unchecked'}
                                              label={"Efectivo"}/>
                        </View>
                        <View style={checkoutStyles.itemMethodNotBorder}>
                            <Image source={appIcons.card} style={{width: 40, height: 40}}/>
                            <RadioButton.Item style={{width:dimensions.wp('68%')}}
                                              value={'payment-methods'}
                                              status={'unchecked'}
                                              label={"Datáfono"}/>
                        </View>
                    </RadioButton.Group>
                </View>
                <View style={{gap: 10}}>
                    <TextMedium fontSize={18}>
                        Método de entrega
                    </TextMedium>
                    <Divider width={80}/>
                </View>
            </View>
            <View style={{flex:1, justifyContent:'flex-start', paddingVertical:15}}>
                <View style={checkoutStyles.deliveryMethod}>
                    <TextMedium fontSize={18}>
                        Dentro de la unidad
                    </TextMedium>
                </View>
                <View style={checkoutStyles.total}>
                    <TextMedium fontSize={18}>
                        Total
                    </TextMedium>
                    <TextMedium fontSize={28}>
                        {formatters.currency(getTotal())}
                    </TextMedium>
                </View>
                <View style={{flex:1, justifyContent: 'flex-end', paddingVertical: 15}}>
                    <ButtonBlackPrimaryCustomizable
                        callback={sendOrder}>
                        <TextBold fontSize={18}>
                            Proceder con el pedido
                        </TextBold>
                    </ButtonBlackPrimaryCustomizable>
                </View>
            </View>
        </View>
    </>
}