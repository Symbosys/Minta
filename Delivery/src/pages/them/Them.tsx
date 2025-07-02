import * as React from 'react';
import App from '../../../App';
import { useColorScheme } from 'react-native';
import { themeColor } from './Colors';
import {
    MD3DarkTheme,
    MD3LightTheme,
    PaperProvider,
} from 'react-native-paper';
import Rout from '../../Rout';

export default function Them() {
    const colorScheme = useColorScheme();

    const paperTheme =
        colorScheme === 'dark'
            ? { ...MD3DarkTheme, colors: themeColor.dark }
            : { ...MD3LightTheme, colors: themeColor.light };

    return (
        <PaperProvider theme={paperTheme}>
       <Rout/>
        </PaperProvider>
    );
}


