import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');
export default {
    wp,
    hp,
    getAspectRatio: (): number => width / height,
    height,
    width,
}