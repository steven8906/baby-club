import {StyleSheet} from "react-native";
import {AppColors} from "../../../infrastructure/styles/theme";

export default StyleSheet.create({
    content:{
        padding         :25,
        flex            :1,
        backgroundColor :AppColors.whiteMate,
    },
    cardContact:{
        backgroundColor :AppColors.white,
        flex            : 1,
        borderRadius    :20,
        flexDirection   :'row'
    },
    avatar:{
        flex            : .4,
        alignItems      : 'center',
        justifyContent  : 'center',
    },
    info:{
        alignItems      : 'flex-start',
        justifyContent  : 'center',
        flex            : .6,
        padding         : 10,
    }
});