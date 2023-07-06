import {StyleSheet} from "react-native";

export enum AppColors {
    primary       = '#FFC83A',
    black         = '#000000',
    white         = '#FFFFFF',
    whiteMate     = '#F2F2F2',
    mate          = '#EFEEEE',
    silver        = '#A9A9A9',
    silverLight   = '#F2F1F1',
    transparent   = 'transparent',
}

export enum FontFamilies {
    regular       = 'SF-Pro-Rounded-Regular',
    medium        = 'SF-Pro-Rounded-Medium',
    bold          = 'sf-pro-rounded-bold',
    extraBold     = 'SF-Pro-Rounded-Black',
    light         = 'sf-pro-rounded-light',
}

export const shadows = StyleSheet.create({
    first:{
        shadowColor       : AppColors.black,
        shadowOpacity     : .4,
        shadowRadius      : 25,
        shadowOffset      : {height: 0, width: 0},
        elevation         : 3,
    },
    second:{
        shadowColor       : AppColors.silver,
        shadowOpacity     : .4,
        shadowRadius      : 25,
        shadowOffset      : {height: 0, width: 0},
        elevation         : 3,
    },
    third:{
        shadowColor       : AppColors.primary,
        shadowOpacity     : .4,
        shadowRadius      : 25,
        shadowOffset      : {height: 0, width: 0},
        elevation         : 3,
    }
});