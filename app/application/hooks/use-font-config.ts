import {useFonts} from "expo-font";

export default function useFontConfig(){

    const [fontsLoaded] = useFonts({
        'SF-Pro-Rounded-Black': require('../../infrastructure/assets/fonts/sf-pro-rounded-black.otf'),
        'SF-Pro-Rounded-Regular': require('../../infrastructure/assets/fonts/FontsFree-Net-SF-Pro-Rounded-Regular.ttf'),
        'SF-Pro-Rounded-Medium': require('../../infrastructure/assets/fonts/SF-Pro-Rounded-Medium.ttf'),
        'sf-pro-rounded-bold': require('../../infrastructure/assets/fonts/sf-pro-rounded-bold.otf'),
        'sf-pro-rounded-light': require('../../infrastructure/assets/fonts/sf-pro-rounded-light.otf'),
    });

    return {
        fontsLoaded
    }
}