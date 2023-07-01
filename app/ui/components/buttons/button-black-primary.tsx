import {TouchableOpacity} from "react-native";
import {AppColors} from "../../../infrastructure/styles/theme";
import TextRegular from "../text/text-regular";
import buttonStyles from "./styles/button-styles";
import {useState} from "react";
import TextBold from "../text/text-bold";

interface Props {
    text     : string;
    callback :()=> void;
    color?   : AppColors;
}

export default function ButtonBlackPrimary({text, callback, color = AppColors.primary}: Props) {

    const [isPressed, setIsPressed] = useState<boolean>(false);

    return <>
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={callback}
            style={{
                ...buttonStyles.buttonBlackPrimary,
                backgroundColor: isPressed ? AppColors.black : AppColors.primary,
                borderColor: isPressed ? AppColors.black : AppColors.primary,
                borderWidth: 1
            }}>
            <TextBold fontSize={16} color={isPressed ? AppColors.primary : AppColors.black}>
                {text}
            </TextBold>
        </TouchableOpacity>
    </>
}