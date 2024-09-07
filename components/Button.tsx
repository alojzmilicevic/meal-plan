import { useTheme } from "@emotion/react";
import { Button as PaperButton } from "react-native-paper";

type ButtonProps = React.ComponentProps<typeof PaperButton> & {
    variant?:
        | "primary"
        | "secondary"
        | "error"
};

export const Button = (props: ButtonProps) => {

    // variant affects the color of the text and the background color
    // theme mode affects the color of the text and the background color

    const theme = useTheme();
    
    const textColorMap = {
        primary: theme.colors.onPrimary,
        secondary: theme.colors.onSecondary,
        error: theme.colors.onError,
    };

    const backgroundColorMap = {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        error: theme.colors.error,
    };
    const style = {
        ...(typeof props.style === "object" && props.style ? props.style : {
            backgroundColor: backgroundColorMap[props.variant || "primary"],
        }),
    };
    return <PaperButton {...props} style={style} textColor={textColorMap[props.variant || "primary"]} />;
};
