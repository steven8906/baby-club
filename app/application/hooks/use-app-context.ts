import {useContext, useState} from "react";
import AppContext from "../context/app-context";

export const useApp = ()=> {
    const [screen, setScreen] = useState<'welcome' | 'home'>('welcome');

    return { screen, setScreen };
}

export default ()=> useContext(AppContext);