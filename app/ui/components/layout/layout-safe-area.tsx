import Header from "./header";
import React from "react";
import {SafeAreaView, View} from "react-native";
import {Colors} from "../../../infrastructure/resources/styles/theme";

interface Props {
    children: React.ReactNode;
}

export default function LayoutSafeArea({children}: Props) {

    return <>
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.whiteMate}}>
            <View style={{paddingHorizontal: 25, flex: 1}}>
                <Header/>
                {children}
            </View>
        </SafeAreaView>
    </>
}