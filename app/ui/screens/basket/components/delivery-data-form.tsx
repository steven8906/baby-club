import {View} from "react-native";
import TextBold from "../../../components/text/text-bold";
import deliveryDataStyles from "../styles/delivery-data-styles";
import TextInputIcon from "../../../components/text-imput/text-input-icon";
import {Entypo, Feather, MaterialIcons} from "@expo/vector-icons";
import TextLight from "../../../components/text/text-light";
import ButtonBlackPrimary from "../../../components/buttons/button-black-primary";

export default function DeliveryDataForm() {
    const IconName    = () => <MaterialIcons name="drive-file-rename-outline" size={24} color="black"/>
    const IconAddress = () => <Entypo name="address" size={24} color="black"/>
    const IconPhone   = () => <Feather name="smartphone" size={24} color="black"/>;
    return <>
        <View style={deliveryDataStyles.content}>
            <View style={deliveryDataStyles.titleSection}>
                <TextBold fontSize={16}>
                    Por favor ingrese sus datos de contacto
                </TextBold>
            </View>
            <View style={deliveryDataStyles.form}>
                <View style={deliveryDataStyles.itemForm}>
                    <View style={{marginLeft:10}}>
                        <TextLight fontSize={18}>
                            Nombre
                        </TextLight>
                    </View>
                    <TextInputIcon icon={<IconName/>} placeholder={"Ingrese su nombre"}/>
                </View>
                <View style={deliveryDataStyles.itemForm}>
                    <View style={{marginLeft:10}}>
                        <TextLight fontSize={18}>
                            Dirección
                        </TextLight>
                    </View>
                    <TextInputIcon icon={<IconAddress/>} placeholder={"Ingrese su dirección"}/>
                </View>
                <View style={deliveryDataStyles.itemForm}>
                    <View style={{marginLeft:10}}>
                        <TextLight fontSize={18}>
                            Teléfono
                        </TextLight>
                    </View>
                    <TextInputIcon icon={<IconPhone/>} placeholder={"Ingrese su número de teléfono"}/>
                </View>
            </View>
            <View style={{alignItems:'center', justifyContent:'flex-end', flexGrow:1, paddingBottom:25}}>
                <ButtonBlackPrimary callback={()=> null} text={"Guardar"}/>
            </View>
        </View>
    </>
}