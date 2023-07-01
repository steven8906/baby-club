import {TouchableOpacity} from "react-native";
import {AppColors} from "../../../infrastructure/styles/theme";
import buttonStyles from "./styles/button-styles";
import React, {useState} from "react";
import TextBold from "../text/text-bold";

interface Props {
    text    ?: string;
    width   ?: string | number;
    children?: React.ReactNode;
    callback: () => void;
    color   ?: AppColors;
}

export default function ButtonBlackPrimaryCustomizable({text, callback, color = AppColors.primary, width, children}: Props) {

    const [isPressed, setIsPressed] = useState<boolean>(false);

    return <>
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={callback}
            style={{
                width,
                ...buttonStyles.buttonBlackPrimaryCustomizable,
                backgroundColor: isPressed ? AppColors.black : AppColors.primary,
                borderColor: isPressed ? AppColors.black : AppColors.primary,
                borderWidth: 1
            }}>
            <TextBold fontSize={16} color={isPressed ? AppColors.primary : AppColors.black}>
                {children ?? text}
            </TextBold>
        </TouchableOpacity>
    </>
}