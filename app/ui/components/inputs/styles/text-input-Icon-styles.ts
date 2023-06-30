import {StyleSheet} from "react-native";
import {AppColors} from "../../../../infrastructure/styles/theme";

export default StyleSheet.create({
    box: {
        backgroundColor   : AppColors.mate,
        paddingHorizontal : 25,
        borderRadius      : 30,
        flexDirection     :'row',
        justifyContent    :'space-between',
        alignItems        :'center',
    }
});