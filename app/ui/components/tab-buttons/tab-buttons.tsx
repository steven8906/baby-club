import {Feather, Ionicons, MaterialIcons} from "@expo/vector-icons";
import ConfigNavigation from "../../../infrastructure/navigation/config-navigation";
import tabStyles from "../../../infrastructure/styles/tab-styles";
import {Colors} from "../../../infrastructure/styles/theme";
import * as React from "react";


export const HomeButton = ({screen}:{screen:string}) => <>
    <Ionicons name="home"
              size={28}
              style={screen === ConfigNavigation.home && {...tabStyles.icon}}
              color={screen === ConfigNavigation.home ?
                  Colors.primary :
                  Colors.silver}/>
</>

export const FavoritesButton = ({screen}:{screen:string}) => <>
    <MaterialIcons name="favorite-border"
                   size={28}
                   style={screen === ConfigNavigation.favorites
                       && {...tabStyles.icon}}
                   color={screen === ConfigNavigation.favorites ?
                       Colors.primary :
                       Colors.silver}/>
</>

export const UserButton = ({screen}:{screen:string}) => <>
    <Feather name="user"
             size={28}
             style={screen === ConfigNavigation.user
                 && {...tabStyles.icon}}
             color={screen === ConfigNavigation.user ?
                 Colors.primary :
                 Colors.silver} />
</>

export const HistoryButton = ({screen}:{screen:string}) => <>
    <MaterialIcons name="history"
                   size={28}
                   style={screen === ConfigNavigation.historyOrders
                       && {...tabStyles.icon}}
                   color={screen === ConfigNavigation.historyOrders ?
                       Colors.primary :
                       Colors.silver} />
</>