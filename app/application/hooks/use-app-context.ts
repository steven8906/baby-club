import {useContext, useState} from "react";
import AppContext from "../context/app-context";
import ConfigNavigation from "../../infrastructure/navigation/config-navigation";

export const useApp = ()=> {
    const [screen, setScreen] = useState<ConfigNavigation>(ConfigNavigation.home);

    return { screen, setScreen };
}

export default ()=> useContext(AppContext);