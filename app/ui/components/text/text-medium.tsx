import React from "react/index";
import {Text, View} from "react-native";
import {AppColors, FontFamilies} from "../../../infrastructure/styles/theme";

interface Props {
    children : React.ReactNode;
    fontSize : number;
    color?   : AppColors;
}

export default function TextMedium({children, fontSize, color = AppColors.black}: Props) {

    return <>
        <View>
            <Text style={{fontFamily: FontFamilies.medium, fontSize, color}}>
                {children}
            </Text>
        </View>
    </>
}