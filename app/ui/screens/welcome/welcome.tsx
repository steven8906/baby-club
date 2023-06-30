import {Image, SafeAreaView, View} from "react-native";
import welcomeStyles from "./styles/welcome-styles";
import TextBold from "../../components/text/text-bold";
import {AppColors} from "../../../infrastructure/styles/theme";
import ButtonWhitePrimary from "../../components/buttons/button-white-primary";
import appImg from "../../../infrastructure/resources/app-img";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";
import {useApp} from "../../../application/hooks/use-app-context";
import {StatusBar} from "expo-status-bar";

export default function Welcome({navigation}) {
    const { setScreen } = useApp();
    return <>
        <StatusBar backgroundColor={AppColors.transparent}/>
        <SafeAreaView style={welcomeStyles.container}>
            <View style={welcomeStyles.main}>
                <View style={{marginTop: 50, flex: 4, flexDirection: 'column'}}>
                    <TextBold fontSize={60} color={AppColors.white}>
                        Baby Club
                    </TextBold>
                    <View style={welcomeStyles.content}>
                        <Image
                            style={welcomeStyles.image}
                            source={appImg.welcome}
                        />
                        <ButtonWhitePrimary text={"Iniciar"}
                                            callback={() => {
                                                setScreen(ConfigNavigation.home);
                                                navigation.navigate(ConfigNavigation.tabScreens);
                                            }}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </>
}