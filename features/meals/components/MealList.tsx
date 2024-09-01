import { View } from "react-native";
import { UseMealsType } from "../hooks/useMeals";
import { Button, Divider, Icon, ListItem, Text, useTheme } from "@rneui/themed";
import { makeStyles } from "@rneui/base";
import { ScrollView } from "react-native";

type MealListProps = Pick<UseMealsType, "filteredMeals" | "deleteMeal">;

const useStyles = makeStyles({
    container: {
        display: "flex",
        width: "100%",
        flexGrow: 1,
    },
    noMeals: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

const NoMealsView = () => {
    const styles = useStyles();
    const { theme } = useTheme();
    return (
        <View style={styles.noMeals}>
            <Icon name="local-dining" size={64} color={theme.colors.primary}></Icon>
            <Text h4>
                No meals added
            </Text>
        </View>
    );
};

export const MealList = ({ filteredMeals, deleteMeal }: MealListProps) => {
    const styles = useStyles();
    return (
        <ScrollView style={styles.container}>
            {filteredMeals.map((meal, index) => (
                <>
                    <ListItem.Swipeable
                        rightStyle={{ backgroundColor: "white" }}
                        leftStyle={{ backgroundColor: "white" }}
                        rightContent={(reset) => (
                            <Button
                                title="Delete"
                                color={"error"}
                                onPress={() => {
                                    deleteMeal(index);
                                    return reset();
                                }}
                                icon={{
                                    name: "delete",
                                    color: "white",
                                }}
                                buttonStyle={{
                                    minHeight: "100%",
                                    borderRadius: 0,
                                }}
                                containerStyle={{
                                    borderRadius: 0,
                                    minHeight: "100%",
                                }}
                            />
                        )}
                    >
                        <ListItem.Title>{meal.name}</ListItem.Title>
                    </ListItem.Swipeable>
                    <Divider />
                </>
            ))}

            {filteredMeals.length === 0 && <NoMealsView />}
            <View style={{ height: 32 }}></View>
        </ScrollView>
    );
};
