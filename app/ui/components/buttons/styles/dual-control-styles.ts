import {StyleSheet} from "react-native";
import {AppColors} from "../../../../infrastructure/styles/theme";

export default StyleSheet.create({
   content:{
       backgroundColor : AppColors.primary,
       flexDirection   : 'row',
       gap             : 10,
       justifyContent  : 'center',
       borderRadius    : 30,
   }
});