import {TouchableOpacity} from "react-native";
import {AppColors} from "../../../infrastructure/styles/theme";
import TextRegular from "../text/text-regular";
import buttonStyles from "./styles/button-styles";
import {useState} from "react";

interface Props {
    text     : string;
    callback :()=> void;
    color?   : AppColors;
}

export default function ButtonWhitePrimary({text, callback, color = AppColors.primary}: Props) {

    const [isPressed, setIsPressed] = useState<boolean>(false);

    return <>
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={callback}
            style={{
                ...buttonStyles.button,
                backgroundColor: isPressed ? AppColors.primary : AppColors.white,
                borderColor: isPressed ? AppColors.white : AppColors.primary,
                borderWidth: 1
            }}>
            <TextRegular fontSize={16} color={isPressed ? AppColors.white : AppColors.primary}>
                {text}
            </TextRegular>
        </TouchableOpacity>
    </>
}