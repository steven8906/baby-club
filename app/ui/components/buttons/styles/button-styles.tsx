import {Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({
    button:{
        width           : Dimensions.get('window').width - 100,
        paddingVertical : 18,
        justifyContent  :'center',
        alignItems      :'center',
        borderRadius    : 30
    }
});
