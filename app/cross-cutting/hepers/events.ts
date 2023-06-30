import {Dimensions, NativeScrollEvent, NativeSyntheticEvent} from "react-native";

export default {
    scrollViewCurrentPageDetect: (ev:NativeSyntheticEvent<NativeScrollEvent>, callback:(page:number)=> void)=> {
        const contentOffset = ev.nativeEvent.contentOffset.x;
        callback(Math.round(contentOffset / Dimensions.get('window').width) + 1);
    }
}