import {TextInput, View} from "react-native";
import textInputIconStyles from "./styles/text-input-Icon-styles";
import {Ionicons} from "@expo/vector-icons";
import {FontFamilies} from "../../../infrastructure/styles/theme";

interface Props {
    placeholder?: string;
}

export default function TextInputSearch({placeholder = ""}: Props) {

    return <>
        <View style={textInputIconStyles.box}>
            <Ionicons name="md-search-outline"
                      size={25}
                      color="black"/>
            <TextInput style={{padding: 20, flex: 1, fontFamily: FontFamilies.medium}}
                       placeholder={placeholder}/>
        </View>
    </>
}