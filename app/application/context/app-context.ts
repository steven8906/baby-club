import {createContext} from "react";
import AppContextModel from "../../data/models/context/app-context-model";

const AppContext = createContext<AppContextModel>({ } as AppContextModel);

export default AppContext;