import {TouchableOpacity} from "react-native";
import {Colors} from "../../../infrastructure/styles/theme";
import TextRegular from "../text/text-regular";
import buttonStyles from "./styles/button-styles";
import {useState} from "react";

interface Props {
    text     : string;
    callback :()=> void;
    color?   : Colors;
}

export default function ButtonWhitePrimary({text, callback, color = Colors.primary}: Props) {

    const [isPressed, setIsPressed] = useState<boolean>(false);

    return <>
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={callback}
            style={{
                ...buttonStyles.button,
                backgroundColor: isPressed ? Colors.primary : Colors.white,
                borderColor: isPressed ? Colors.white : Colors.primary,
                borderWidth: 1
            }}>
            <TextRegular fontSize={16} color={isPressed ? Colors.white : Colors.primary}>
                {text}
            </TextRegular>
        </TouchableOpacity>
    </>
}