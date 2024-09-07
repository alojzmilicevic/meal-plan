import { MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper";
import mt from "./material-theme.json";

const { schemes } = mt;
const { light, dark } = schemes;

export type AppTheme = MD3Theme & {
    spacing: (space: number) => string;
};

export const lightTheme: AppTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...light,
    },
    spacing: (space: number) => space * 8 + "px",
};

export const darkTheme: AppTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...dark,
    },
    spacing: lightTheme.spacing,
};
