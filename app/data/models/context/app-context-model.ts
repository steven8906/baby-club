import React from "react";

export default interface AppContextModel {
    screen    : 'welcome' | 'home';
    setScreen : React.Dispatch<React.SetStateAction<'welcome' | 'home'>>;
}
