import React from "react";
import TextRegular from "../text/text-regular";
import TextBold from "../text/text-bold";
import {GestureResponderEvent, TouchableOpacity, View} from "react-native";
import dualControlStyles from "./styles/dual-control-styles";

interface Props {
    text         : string | number;
    width?       : number;
    lessCallback : (ev: GestureResponderEvent) => void;
    moreCallback : (ev: GestureResponderEvent) => void;
}

export default function DualControl({text, width = 80, lessCallback, moreCallback}: Props) {

    return <>
        <View style={{...dualControlStyles.content, width}}>
            <TouchableOpacity onPress={lessCallback}>
                <TextBold fontSize={15}>
                    -
                </TextBold>
            </TouchableOpacity>
            <TextBold fontSize={15}>
                {text}
            </TextBold>
            <TouchableOpacity onPress={moreCallback}>
                <TextBold fontSize={15}>
                    +
                </TextBold>
            </TouchableOpacity>
        </View>
    </>
}