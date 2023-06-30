import {View} from "react-native";
import React from "react";
import {AppColors} from "../../../infrastructure/styles/theme";

interface Props {
    children         : React.ReactNode;
    backgroundColor? : AppColors | string;
}

export default function CleanLayout({children, backgroundColor = AppColors.white}: Props) {

    return <>
        <View style={{flex: 1, backgroundColor}}>
            {children}
        </View>
    </>
}