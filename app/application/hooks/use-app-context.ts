import {useContext, useState} from "react";
import AppContext from "../context/app-context";
import ConfigNavigation from "../../infrastructure/navigation/config-navigation";

export const useApp = ()=> {
    const [screen, setScreen] = useState<ConfigNavigation>(ConfigNavigation.welcome);

    return { screen, setScreen };
}

export default ()=> useContext(AppContext);