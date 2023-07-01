import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import {AppColors} from "../../../infrastructure/styles/theme";

interface Props {
    children        : React.ReactNode;
    visible         : boolean;
    setVisible      : React.Dispatch<React.SetStateAction<boolean>>;
    backgroundColor?: AppColors;
    height         ?: number;
}

export default function CustomBottomSheet({children, visible, setVisible, backgroundColor = AppColors.whiteMate, height = 350}:Props) {
    const toggleBottomNavigationView = () => setVisible(!visible);

    return (
        <BottomSheet
            visible={visible}
            onBackButtonPress={toggleBottomNavigationView}
            onBackdropPress={toggleBottomNavigationView}
        >
            <View style={{...styles.bottomNavigationView, backgroundColor, height}}>
                {children}
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    bottomNavigationView: {
        width           : '100%',
        justifyContent  : 'center',
        alignItems      : 'center',
    },
});
