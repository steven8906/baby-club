import {StyleSheet} from "react-native";
import {AppColors} from "./theme";

export default StyleSheet.create({
    tabBarStyle: {
        backgroundColor: AppColors.whiteMate,
        borderTopColor: AppColors.whiteMate,
    },
    icon:{
        borderRadius  : 10,
        shadowOffset  : {width: 0, height: 0},
        shadowColor   : AppColors.primary,
        shadowOpacity : .8,
        shadowRadius  : 6,
    },
})