import {StyleSheet} from "react-native";
import dimensions from "../../../../cross-cutting/hepers/dimensions";
import {AppColors, shadows} from "../../../../infrastructure/styles/theme";

export default StyleSheet.create({
    content: {
        padding         : 15,
        marginVertical  : 10,
        width           : dimensions.wp(85),
        backgroundColor : AppColors.white,
        alignItems      :'center',
        borderRadius    : 25,
        flexDirection   :'row',
        gap             :10,
        ...shadows.second
    },
    textDescriptionBox:{
        flex           : 1,
        alignItems     : 'flex-start',
        justifyContent : 'center',
    },
    numberControl:{
        flexDirection   : 'row',
        width           : '100%',
        justifyContent  : 'space-between',
    }
});