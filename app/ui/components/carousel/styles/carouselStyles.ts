import {StyleSheet} from "react-native";
import {AppColors} from "../../../../infrastructure/styles/theme";

export default StyleSheet.create({
    content:{
        alignItems     : 'center',
    },
    scrollView:{
        flex            :1
    },
    indicatorContent: {
        flexDirection : 'row',
        gap           : 10,
        flex          : 1
    },
    primaryPoint: {
        width           : 12,
        height          : 12,
        backgroundColor : AppColors.primary,
        borderRadius    : 6,
    },
    secondaryPoint: {
        width           : 12,
        height          : 12,
        backgroundColor : AppColors.silver,
        borderRadius    : 6,
    },
})