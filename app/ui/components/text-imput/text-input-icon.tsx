import {TextInput, View} from "react-native";
import {FontFamilies} from "../../../infrastructure/styles/theme";
import React from "react";
import textInputIconStyles from "./styles/text-input-icon-styles";

interface Props {
    icon         : React.ReactNode;
    placeholder? : string;
}

export default function TextInputIcon({ icon, placeholder = ""}: Props) {

    return <>
        <View style={textInputIconStyles.box}>
            {icon}
            <TextInput style={{padding: 20, flex: 1, fontFamily: FontFamilies.medium}}
                       placeholder={placeholder}/>
        </View>
    </>
}