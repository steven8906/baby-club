import {StyleSheet} from "react-native";
import {Colors} from "../../../../infrastructure/resources/styles/theme";

export default StyleSheet.create({
    box: {
        backgroundColor   : Colors.mate,
        paddingHorizontal : 25,
        borderRadius      : 30,
        flexDirection     :'row',
        justifyContent    :'space-between',
        alignItems        :'center',
    }
});