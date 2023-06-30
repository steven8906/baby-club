import {Text, TouchableOpacity, View} from "react-native";
import headerStyles from "./styles/headerStyles";
import {Feather, SimpleLineIcons} from "@expo/vector-icons";
import {AppColors} from "../../../infrastructure/styles/theme";

export default function Header() {

    return <>
        <View style={headerStyles.content}>
            <View style={headerStyles.menuButtonContent}>
                <TouchableOpacity>
                    <Feather name={"menu"} size={25}/>
                </TouchableOpacity>
            </View>
            <View style={headerStyles.basketButtonContent}>
                <SimpleLineIcons name="basket-loaded" size={25} color={AppColors.silver}/>
            </View>
        </View>
    </>
}