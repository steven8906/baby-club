import {View} from "react-native";
import React from "react";
import {Colors} from "../../../infrastructure/styles/theme";

interface Props {
    children         : React.ReactNode;
    backgroundColor? : Colors | string;
}

export default function CleanLayout({children, backgroundColor = Colors.white}: Props) {

    return <>
        <View style={{flex: 1, backgroundColor}}>
            {children}
        </View>
    </>
}