import {StyleSheet} from "react-native";
import {AppColors} from "../../../../infrastructure/styles/theme";
import dimensions from "../../../../cross-cutting/hepers/dimensions";

export default StyleSheet.create({
    box: {
        backgroundColor   : 'white',
        width             : '85%',
        paddingBottom     : 40,
        paddingHorizontal : 30,
        borderRadius      : 20,
        shadowColor       : AppColors.silver,
        shadowOpacity     : .4,
        shadowRadius      : 25,
        shadowOffset      : {height: 0, width: 0},
        alignItems        : 'center',
        gap               : 10,
        position          : 'relative',
    },
    boxImage:{
        position      : "absolute",
        top           : dimensions.hp(-15),
    },
    image:{
        width             : dimensions.wp(35),
        height            : dimensions.hp(35),
        resizeMode        : 'contain',
    },
    boxText:{
        marginTop: 55,
        gap: 25,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10
    }
});