import {StyleSheet} from "react-native";
import {AppColors, shadows} from "../../../../infrastructure/styles/theme";

export default StyleSheet.create({
    content:{
        flex            :1,
    },
    map:{
        flex            : 1.1,
        backgroundColor : 'green',
    },
    info:{
        flex                 : .9,
        backgroundColor      : AppColors.white,
        borderTopLeftRadius  : 16,
        borderTopRightRadius : 16,
        padding              : 15,
        ...shadows.second
    }
});