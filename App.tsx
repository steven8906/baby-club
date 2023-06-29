import {NavigationContainer} from '@react-navigation/native';
import ConfigNavigation from "./app/infrastructure/navigation/config-navigation";
import Home from "./app/ui/screens/home/home";
import useFontConfig from "./app/application/hooks/use-font-config";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AppContext from "./app/application/context/app-context";
import {useApp} from "./app/application/hooks/use-app-context";
import Welcome from "./app/ui/screens/welcome/welcome";
import Favorites from "./app/ui/screens/favorites/favorites";
import tabStyles from "./app/infrastructure/styles/tab-styles";
import {FavoritesButton, HistoryButton, HomeButton, UserButton} from "./app/ui/components/tab-buttons/tab-buttons";
import User from "./app/ui/screens/user/user";
import HistoryOrders from "./app/ui/screens/history-orders/history-orders";
import {createStackNavigator} from "@react-navigation/stack";
import ProductDetail from "./app/ui/screens/product-detail/product-detail";

export default function App() {
    const {fontsLoaded} = useFontConfig();
    const {screen, setScreen} = useApp();
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    if (!fontsLoaded) return null;

    const iconsRoute: { [key: string]: React.ReactNode } = {
        [ConfigNavigation.home]          : <HomeButton screen     ={screen}/>,
        [ConfigNavigation.favorites]     : <FavoritesButton screen={screen}/>,
        [ConfigNavigation.user]          : <UserButton screen     ={screen}/>,
        [ConfigNavigation.historyOrders] : <HistoryButton screen  ={screen}/>,
    }

    return <>

        <AppContext.Provider value={{screen, setScreen}}>
            {screen !== ConfigNavigation.welcome ?
                <>
                    <NavigationContainer>
                        <Tab.Navigator
                            initialRouteName={ConfigNavigation.home}
                            screenOptions={({route}) => (
                                {
                                    headerShown: false,
                                    tabBarStyle: tabStyles.tabBarStyle,
                                    title: '',
                                    tabBarIcon: () => {
                                        if (route.name in iconsRoute) return iconsRoute[route.name]
                                    },
                                }
                            )}>
                            <Tab.Screen name={ConfigNavigation.home}
                                        component={Home}
                                        listeners={{tabPress: () => setScreen(ConfigNavigation.home)}}/>
                            <Tab.Screen name={ConfigNavigation.favorites}
                                        component={Favorites}
                                        listeners={{tabPress: () => setScreen(ConfigNavigation.favorites)}}/>
                            <Tab.Screen name={ConfigNavigation.user}
                                        component={User}
                                        listeners={{tabPress: () => setScreen(ConfigNavigation.user)}}/>
                            <Tab.Screen name={ConfigNavigation.historyOrders}
                                        component={HistoryOrders}
                                        listeners={{tabPress: () => setScreen(ConfigNavigation.historyOrders)}}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                    {/*<Stack.Navigator>*/}
                    {/*    <Stack.Screen name={ConfigNavigation.productDetail} component={ProductDetail}/>*/}
                    {/*</Stack.Navigator>*/}
                </> :
                <Welcome/>}
        </AppContext.Provider>
    </>
}