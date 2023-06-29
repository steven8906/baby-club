import {View} from "react-native";
import LayoutSafeArea from "../../components/layout/layout-safe-area";
import TextBold from "../../components/text/text-bold";
import TextInputSearch from "../../components/inputs/text-input-search";

export default function Home() {

    return <>
        <LayoutSafeArea>
            <View style={{width: '70%', marginTop: 25}}>
                <TextBold fontSize={34}>
                    Lo que necesitas para tu bebé
                </TextBold>
            </View>
            <View style={{marginTop: 25}}>
                <TextInputSearch placeholder={"Busca tu producto..."}/>
            </View>
        </LayoutSafeArea>
    </>
}