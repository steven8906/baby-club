import {StyleSheet} from "react-native";
import {Colors} from "./theme";

export default StyleSheet.create({
    tabBarStyle: {
        backgroundColor: Colors.whiteMate,
        borderTopColor: Colors.whiteMate,
    },
    icon:{
        borderRadius  : 10,
        shadowOffset  : {width: 0, height: 0},
        shadowColor   : Colors.primary,
        shadowOpacity : .8,
        shadowRadius  : 6,
    }
})