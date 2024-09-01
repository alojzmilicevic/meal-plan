import { store } from "@/store";
import { appTheme } from "@/theme/theme";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useContext, useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { DefaultTheme, MD3Theme, PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const ThemeContext = createContext(DefaultTheme);
export const useTheme = () => useContext(ThemeContext);

export const makeStyles = (styles: (arg0: MD3Theme) => any) => () => {
    const theme = useTheme();
    const evaluatedStyles = typeof styles === 'function' ? styles(theme) : styles;
    return StyleSheet.create(evaluatedStyles);
};

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }
    const theme = createTheme(appTheme);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Provider store={store}>
                    <ThemeContext.Provider value={DefaultTheme}>
                        <PaperProvider>
                            <ThemeProvider theme={theme}>
                                <StatusBar barStyle="dark-content" />
                                <Stack>
                                    <Stack.Screen
                                        name="(tabs)"
                                        options={{ headerShown: false }}
                                    />
                                </Stack>
                            </ThemeProvider>
                        </PaperProvider>
                    </ThemeContext.Provider>
                </Provider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
