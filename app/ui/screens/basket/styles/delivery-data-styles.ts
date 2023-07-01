import {StyleSheet} from "react-native";
import dimensions from "../../../../cross-cutting/hepers/dimensions";

export default StyleSheet.create({
    content: {
        flex              : 1,
        width             : dimensions.wp(100),
        paddingHorizontal : 20,
        paddingVertical   : 15,
    },
    titleSection: {
        flexGrow: .1,
    },
    form: {
        flexGrow: .5
    },
    itemForm: {
        gap: 10
    },
});