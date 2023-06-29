import {ScrollView, TouchableOpacity, View} from "react-native";
import TextLight from "../text/text-light";
import {Colors} from "../../../infrastructure/resources/styles/theme";
import Divider from "../divider";
import {useState} from "react";

export default function CategoryList() {
    const [indexCategory, setIndexCategory] = useState<number>(0);

    return <>
        <ScrollView style={{marginTop: 25}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
            {['Pañales', 'Cremas', 'Pañitos', 'Biberones', 'Alimentos'].map((x, index) =>
                <TouchableOpacity key={`category-${index}`}
                                  onPress={() => setIndexCategory(index)}>
                    <View style={{marginHorizontal: 5}}>
                        <View style={{paddingHorizontal: 15, marginBottom: 10}}>
                            <TextLight fontSize={18}
                                       color={indexCategory === index ? Colors.primary : Colors.silver}>
                                {x}
                            </TextLight>
                        </View>
                        {indexCategory === index && <Divider/>}
                    </View>
                </TouchableOpacity>)}
        </ScrollView>
    </>
}