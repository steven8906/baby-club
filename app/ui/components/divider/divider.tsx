import {View} from "react-native";
import {Colors} from "../../../infrastructure/styles/theme";

interface Props {
    color?: Colors;
    width?: number | string;
}

export default function Divider({color = Colors.primary, width = '100%'}: Props) {
    return <>
        <View style={{
            width,
            height: 6,
            backgroundColor: color,
            borderRadius: 10,
            shadowOffset: {width: 0, height: 0},
            shadowColor: color,
            shadowOpacity: .6,
            shadowRadius: 6,
        }}/>
    </>
}