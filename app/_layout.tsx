import { store } from "@/store";
import { lightTheme } from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

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

    const theme = lightTheme;

    const barStyle = theme.dark ? "light-content" : "dark-content";
    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <PaperProvider theme={theme}>
                            <StatusBar
                                barStyle={barStyle}
                                backgroundColor={theme.colors.background}
                            />
                            <Stack>
                                <Stack.Screen
                                    name="(tabs)"
                                    options={{ headerShown: false }}
                                />
                            </Stack>
                        </PaperProvider>
                    </ThemeProvider>
                </Provider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
