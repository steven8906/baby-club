import {NavigationContainer} from '@react-navigation/native';
import ConfigNavigation from "./app/infrastructure/navigation/config-navigation";
import Home from "./app/ui/screens/home/home";
import useFontConfig from "./app/application/hooks/use-font-config";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AppContext from "./app/application/context/app-context";
import {useApp} from "./app/application/hooks/use-app-context";
import Welcome from "./app/ui/screens/welcome/welcome";
import {StyleSheet} from "react-native";
import {Colors} from "./app/infrastructure/resources/styles/theme";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";

export default function App() {
    const {fontsLoaded}       = useFontConfig();
    const {screen, setScreen} = useApp();
    const Tab                 = createBottomTabNavigator();

    if (!fontsLoaded) return null;


    const HomeButton = () => <>
        <Ionicons name="home"
                  size={28}
                  style={tabStyles.icon}
                  color={screen === ConfigNavigation.home ?
                      Colors.primary :
                      Colors.silver}/>
    </>

    const FavoritesButton = () => <>
        <MaterialIcons name="favorite"
                       size={28}
                       color={screen === ConfigNavigation.favorites ?
                           Colors.primary :
                           Colors.silver}/>
    </>

    const iconsRoute: { [key: string]: React.ReactNode } = {
        [ConfigNavigation.home]      : <HomeButton/>,
        [ConfigNavigation.favorites] : <FavoritesButton/>,
    }

    return <>

        <AppContext.Provider value={{screen, setScreen}}>
            {screen === ConfigNavigation.home ?
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName={ConfigNavigation.home}
                        screenOptions={({route}) => (
                            {
                                headerShown : false,
                                tabBarStyle : tabStyles.tabBarStyle,
                                title       : '',
                                tabBarIcon: ({size, color, focused}) => {
                                    if (route.name in iconsRoute) return iconsRoute[route.name]
                                }
                            }
                        )}>
                        <Tab.Screen name={ConfigNavigation.home} component={Home}/>
                        <Tab.Screen name={ConfigNavigation.favorites} component={Home}/>
                        {/*<Tab.Screen name="Settings" component={SettingsScreen} />*/}
                    </Tab.Navigator>
                </NavigationContainer> :
                <Welcome/>}
        </AppContext.Provider>
    </>
}

const tabStyles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: Colors.whiteMate,
        borderTopColor: Colors.whiteMate,
    },
    icon:{
        borderRadius  : 10,
        shadowOffset  : {width: 0, height: 0},
        shadowColor   : Colors.primary,
        shadowOpacity : .8,
        shadowRadius  : 6,
    }
})