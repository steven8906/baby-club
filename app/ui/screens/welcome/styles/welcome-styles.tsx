import {Dimensions, StyleSheet} from "react-native";
import {Colors} from "../../../../infrastructure/resources/styles/theme";


export default StyleSheet.create({
    container: {
        backgroundColor : Colors.primary,
        width           : Dimensions.get('window').width,
        height          : Dimensions.get('window').height,
        flex            : 1,
    },
    main: {
        padding       : 25,
        flex          : 1,
        flexDirection :'column',
    },
    content:{
        flex           : 1,
        flexDirection  :'column',
        justifyContent :'center',
        alignItems     :'center'
    },
    image:{
        width      : Dimensions.get('window').width,
        resizeMode : 'cover',
        height     : 480
    },
})