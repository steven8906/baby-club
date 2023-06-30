import Header from "./header";
import React from "react";
import {SafeAreaView, View} from "react-native";
import {AppColors} from "../../../infrastructure/styles/theme";
import {StatusBar} from "expo-status-bar";
import dimensions from "../../../cross-cutting/hepers/dimensions";

interface Props {
    children: React.ReactNode;
}

export default function LayoutSafeArea({children}: Props) {

    return <>
        <StatusBar backgroundColor={AppColors.transparent}/>
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: AppColors.whiteMate,
            marginTop: dimensions.hp(5)
        }}>
            <View style={{flex: 1}}>
                <Header/>
                {children}
            </View>
        </SafeAreaView>
    </>
}