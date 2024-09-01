import { TabBarIcon } from "@/components/TabBarIcon";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "calendar" : "calendar-outline"}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="meals"
                options={{
                    title: "Meals",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "list" : "list-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
