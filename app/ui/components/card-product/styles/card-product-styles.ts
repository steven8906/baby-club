import {StyleSheet} from "react-native";
import {Colors} from "../../../../infrastructure/resources/styles/theme";

export default StyleSheet.create({
    box: {
        backgroundColor   : 'white',
        width             : '85%',
        paddingBottom     : 40,
        paddingHorizontal : 30,
        borderRadius      : 20,
        shadowColor       : Colors.silver,
        shadowOpacity     : .4,
        shadowRadius      : 25,
        shadowOffset      : {height: 0, width: 0},
        alignItems        : 'center',
        gap               : 10,
        position          : 'relative',
    },
    boxImage:{
        position      : "absolute",
        top           : '-40%',
    },
    image:{
        width             : 150,
        height            : 150,
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