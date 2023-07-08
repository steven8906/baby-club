import {StyleSheet} from "react-native";
import {AppColors} from "../../../../infrastructure/styles/theme";

export default StyleSheet.create({
   content:{
       flex              : 1,
       paddingHorizontal : 20,
       backgroundColor   : AppColors.whiteMate,
   },
    itemMethod:{
        flexDirection     : 'row',
        justifyContent    : 'flex-start',
        alignItems        : 'center',
        gap               : 10,
        padding           : 20,
        borderBottomColor : AppColors.mate,
        borderBottomWidth : 2,
    },
    itemMethodNotBorder:{
        flexDirection     : 'row',
        justifyContent    : 'flex-start',
        alignItems        : 'center',
        gap               : 10,
        padding           : 20,
    },
    deliveryMethod:{
        backgroundColor : AppColors.white,
        borderRadius    : 20,
        marginTop       : 40,
        padding         : 20,
        justifyContent  : 'flex-start'
    },
    total:{
        flexDirection     : 'row',
        justifyContent    : 'space-between',
        alignItems        : 'center',
        padding           : 20
    },
    deliveryMan:{
        flexDirection     : 'row',
        justifyContent    : 'flex-start',
        alignItems        : 'center',
        marginVertical    : 10,
        flexGrow          : 1,
        borderRadius      : 20,
        gap               : 20,
        backgroundColor   : AppColors.silverLight,
        paddingHorizontal : 20
    },
});