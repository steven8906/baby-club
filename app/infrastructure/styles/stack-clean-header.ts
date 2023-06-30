import {AppColors} from "./theme";
import {StackNavigationOptions} from "@react-navigation/stack";

const options : StackNavigationOptions = {
    headerTitleContainerStyle: {display: 'none'},
    headerStyle: {
        backgroundColor : AppColors.white,
        borderWidth     : 0,
        elevation       : 0,
        shadowOpacity   : 0,
    },
}

export default options;