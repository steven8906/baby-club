import {StyleSheet} from "react-native";
import {Colors} from "../../../../infrastructure/styles/theme";

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
        backgroundColor : Colors.primary,
        borderRadius    : 6,
    },
    secondaryPoint: {
        width           : 12,
        height          : 12,
        backgroundColor : Colors.silver,
        borderRadius    : 6,
    },
})