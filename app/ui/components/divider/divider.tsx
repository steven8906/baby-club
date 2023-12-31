import {View} from "react-native";
import {AppColors} from "../../../infrastructure/styles/theme";

interface Props {
    color?: AppColors;
    width?: number | string;
}

export default function Divider({color = AppColors.primary, width = '100%'}: Props) {
    return <>
        <View style={{
            width,
            height          : 6,
            backgroundColor : color,
            borderRadius    : 10,
            shadowOffset    : {width: 0, height: 0},
            shadowColor     : color,
            shadowOpacity   : .8,
            shadowRadius    : 6,
            elevation       :5
        }}/>
    </>
}