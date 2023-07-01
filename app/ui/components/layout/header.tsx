import {TouchableOpacity, View} from "react-native";
import headerStyles from "./styles/headerStyles";
import {Feather, SimpleLineIcons} from "@expo/vector-icons";
import {AppColors} from "../../../infrastructure/styles/theme";
import useBasket from "../../../application/hooks/use-basket-context";
import {Badge} from "react-native-paper";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";

export default function Header({navigation}) {
    const {basketProductList} = useBasket();

    return <>
        <View style={headerStyles.content}>
            <Badge style={{
                position        : 'absolute',
                right           : 3,
                top             : -5,
                backgroundColor : AppColors.primary
            }} size={20} disabled={true} visible={new Set([...basketProductList]).size > 0}>
                {new Set([...basketProductList]).size}
            </Badge>
            <View style={headerStyles.menuButtonContent}>
                <TouchableOpacity>
                    <Feather name={"menu"} size={25}/>
                </TouchableOpacity>
            </View>
            { basketProductList.length > 0 && <View style={headerStyles.basketButtonContent}>
                <TouchableOpacity onPress={() => navigation.navigate(ConfigNavigation.basket)}>
                    <SimpleLineIcons name="basket-loaded" size={25} color={AppColors.silver}/>
                </TouchableOpacity>
            </View>}
        </View>
    </>
}