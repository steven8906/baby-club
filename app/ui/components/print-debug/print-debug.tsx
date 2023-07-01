import {ScrollView, Text} from "react-native";

interface Props {
    data: unknown
}

export default function ({data}: Props) {
    return <>
        <ScrollView>
            <Text style={{flex: 1, flexGrow: 1, backgroundColor: '#26214B', color: 'white', padding: 10}}>
                {JSON.stringify(data, null, 3)}
            </Text>
        </ScrollView>
    </>
}