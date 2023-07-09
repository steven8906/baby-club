import LayoutSafeArea from "../../components/layout/layout-safe-area";
import {Image, TouchableOpacity, View} from "react-native";
import TextBold from "../../components/text/text-bold";
import userStyles from "./userStyles";
import TextRegular from "../../components/text/text-regular";
import TextMedium from "../../components/text/text-medium";
import appImg from "../../../infrastructure/resources/app-img";
import appIcons from "../../../infrastructure/resources/app-icons";
import useUserInfo from "../../../application/hooks/use-user-info";
import Divider from "../../components/divider/divider";

export default function User(){
    const { getUserData } = useUserInfo();

    return <>
        <LayoutSafeArea>
            <View style={userStyles.content}>
                <View>
                    <View>
                        <TextBold fontSize={34}>
                            Perfil del usuario
                        </TextBold>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <TextMedium fontSize={18}>
                            Información de contacto
                        </TextMedium>
                        <TouchableOpacity>
                            <TextMedium fontSize={14}>
                                Cambiar
                            </TextMedium>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={userStyles.cardContact}>
                    <View style={userStyles.avatar}>
                        <Image source={appIcons.avatarDeliveryMan} style={{width:90, height:90}}/>
                    </View>
                    <View style={userStyles.info}>
                        <TextRegular fontSize={14}>
                            {getUserData().name}
                        </TextRegular>
                        <Divider width={80}/>
                        <TextRegular fontSize={14}>
                            {getUserData().phone}
                        </TextRegular>
                        <TextRegular fontSize={14}>
                            {getUserData().address}
                        </TextRegular>
                    </View>
                </View>
                <View style={{flex:1}}>

                </View>
            </View>
        </LayoutSafeArea>
    </>
}