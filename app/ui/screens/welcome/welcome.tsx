import {Image, SafeAreaView, View} from "react-native";
import welcomeStyles from "./styles/welcome-styles";
import TextBold from "../../components/text/text-bold";
import {Colors} from "../../../infrastructure/resources/styles/theme";
import ButtonWhitePrimary from "../../components/buttons/button-white-primary";
import useAppContext from "../../../application/hooks/use-app-context";
import appImg from "../../../infrastructure/resources/app-img";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";

export default function Welcome() {
    const { setScreen } = useAppContext();

    return <>
        <SafeAreaView style={welcomeStyles.container}>
            <View style={welcomeStyles.main}>
                <View style={{marginTop: 50, flex: 4, flexDirection: 'column'}}>
                    <TextBold fontSize={60} color={Colors.white}>
                        Baby Club
                    </TextBold>
                    <View style={welcomeStyles.content}>
                        <Image
                            style={welcomeStyles.image}
                            source={appImg.welcome}
                        />
                        <ButtonWhitePrimary text={"Iniciar"}
                                            callback={() => setScreen(ConfigNavigation.home)}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </>
}