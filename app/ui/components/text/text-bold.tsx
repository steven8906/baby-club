import React from "react/index";
import {Text, View} from "react-native";
import {Colors, FontFamilies} from "../../../infrastructure/styles/theme";

interface Props {
    children : React.ReactNode;
    fontSize : number;
    color?   : Colors;
}

export default function TextBold({children, fontSize, color = Colors.black}: Props) {

    return <>
        <View>
            <Text style={{fontFamily: FontFamilies.bold, fontSize, color}}>
                {children}
            </Text>
        </View>
    </>
}