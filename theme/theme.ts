import material_theme from "./material-theme.json";
import { createTheme, darkColors } from "@rneui/themed";

export type Palette = {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
};

export type ExtraPalette = {
    main: string;
    secondary: string;
    mainText: string;
    secondaryText: string;
};

type Theme = {
    primary: string;
    secondary: string;
    tertiary: ExtraPalette;
    info: Palette;
    warn: Palette;
    err: Palette;
};

export type AppTheme = {
    lightColors: Theme;
    darkColors: Theme;
    [key: string]: any;
};

const lightColors: Theme = {
    primary: "#406836",
    secondary: "#54634d",
    tertiary: {
        main: "#c0efaf",
        mainText: "#012200",
        secondary: "#295020",
        secondaryText: "#c0efaf",
    },
    info: {
        main: "#0288d1",
        light: "#03a9f4",
        dark: "#01579b",
        contrastText: "#fff",
    },
    err: {
        main: "#d32f2f",
        light: "#ef5350",
        dark: "#c62828",
        contrastText: "#fff",
    },
    warn: {
        main: "#ed6c02",
        light: "#ff9800",
        dark: "#e65100",
        contrastText: "#fff",
    },
};

export const appTheme = createTheme({
    lightColors,
    components: {
        Chip: (props, theme) => ({
            buttonStyle: {
                backgroundColor: props.selected
                    ? theme.colors.tertiary.secondary
                    : theme.colors.tertiary.main,
            },
            titleStyle: {
                color: props.selected
                    ? theme.colors.tertiary.secondaryText
                    : theme.colors.tertiary.mainText,
            },
        }),
        Button: (props, theme) => {
            let textColor = theme.colors.tertiary.secondaryText;
            switch (props.color) {
                case "error":
                case "warning":
                case "primary":
                    textColor = "white";
            }

            switch (props.type) {
                case "clear":
                case "outline":
                    textColor = theme.colors.primary;
            }

            return {
                buttonStyle: {
                    borderRadius: 24,
                },
                containerStyle: {
                    borderRadius: 24,
                },

                titleStyle: {
                    color: textColor,
                },
            };
        },
    },
});
