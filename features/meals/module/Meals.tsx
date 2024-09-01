import { useAppStyles } from "@/hooks/useAppStyles";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dialog, FAB, Text } from "react-native-paper";
import { Badges } from "../components/Badges";
import { MealList } from "../components/MealList";
import { useMeals } from "../hooks/useMeals";
import { makeStyles } from "@/app/_layout";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 16,
        flex: 1,
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

const useStyles = makeStyles((theme) => {
    console.log(theme);
    
    return ({
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: 16,
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        fab: {
            position: "absolute",
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: theme.colors.primary,
        },
    });
});

export const Meals = () => {
    const {
        mealTypeSelections,
        onSetSelectedType,
        filteredMeals,
        deleteMeal,
        addMeal,
    } = useMeals();

    const st = useStyles();
    console.log(st);
    
    const appStyles = useAppStyles();

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={appStyles.root}>
            <View style={styles.container}>
                <Text variant="headlineLarge">Mina rätter</Text>
                <Badges
                    mealTypeSelections={mealTypeSelections}
                    onSetMealTypeSelection={onSetSelectedType}
                />
                <MealList
                    filteredMeals={filteredMeals}
                    deleteMeal={deleteMeal}
                />
            </View>

            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => {
                    toggleOverlay();
                    return addMeal({ name: "namfdsae", category: "fish" });
                }}
            />
            <Dialog
                visible={visible}
                dismissable={true}
                onDismiss={toggleOverlay}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Dialog.Title>Add Meal</Dialog.Title>
            </Dialog>
        </View>
    );
};
