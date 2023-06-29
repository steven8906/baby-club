import {NavigationContainer} from '@react-navigation/native';
import ConfigNavigation from "./app/infrastructure/navigation/config-navigation";
import Home from "./app/ui/screens/home/home";
import useFontConfig from "./app/application/hooks/use-font-config";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AppContext from "./app/application/context/app-context";
import useAppContext, {useApp} from "./app/application/hooks/use-app-context";
import Welcome from "./app/ui/screens/welcome/welcome";
import {Text} from "react-native";

export default function App() {
    const {fontsLoaded}       = useFontConfig();
    const {screen, setScreen} = useApp();

    if (!fontsLoaded) return null;

    const Tab = createBottomTabNavigator();

    return <>

        <AppContext.Provider value={{screen, setScreen}}>
            {screen === 'home' ?
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName={ConfigNavigation.home}
                        screenOptions={{headerShown: false}}>
                        <Tab.Screen name={ConfigNavigation.home} component={Home}/>
                        {/*<Tab.Screen name="Settings" component={SettingsScreen} />*/}
                    </Tab.Navigator>
                </NavigationContainer> :
                <Welcome/>}
        </AppContext.Provider>
    </>
}