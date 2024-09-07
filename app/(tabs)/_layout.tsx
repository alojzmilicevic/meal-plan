import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";
import { BottomNavigation, Icon } from "react-native-paper";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import HomePage from ".";
import MealsTab from "./meals";
import { useTheme } from "@emotion/react";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const TabBar = ({
    state,
    descriptors,
    navigation,
    insets,
}: BottomTabBarProps) => {
    const theme = useTheme();
    return (
        <BottomNavigation.Bar
            style={{ backgroundColor: theme.colors.surface }}
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
                const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                });

                if (event.defaultPrevented) {
                    preventDefault();
                } else {
                    navigation.dispatch({
                        ...CommonActions.navigate(route.name, route.params),
                        target: state.key,
                    });
                }
            }}
            getLabelText={({ route }) => route.name}
            renderIcon={({ route, focused, color }) => {
                const { options } = descriptors[route.key];
                if (options.tabBarIcon) {
                    return options.tabBarIcon({
                        focused,
                        color,
                        size: 24,
                    });
                }
            }}
        />
    );
};

const Layout = () => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                paddingTop: insets.top,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBar={({ navigation, state, descriptors, insets }) => (
                    <TabBar
                        state={state}
                        descriptors={descriptors}
                        navigation={navigation}
                        insets={insets}
                    />
                )}
            >
                <Tab.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                source={"calendar-text"}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Meals"
                    component={MealsTab}
                    options={{
                        tabBarLabel: "Meals",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                source="food-fork-drink"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

export default Layout;
