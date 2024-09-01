import { Chip, makeStyles } from "@rneui/themed";
import { MealTypeSelection } from "../interface/interface";
import { View } from "react-native";

const useStyles = makeStyles((theme) => ({
    badgeContainer: {
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing.md,
        padding: theme.spacing.lg,
        flexWrap: "wrap",
        justifyContent: "center",
    },
}));

export const Badges = ({
    mealTypeSelections,
    onSetMealTypeSelection,
}: {
    mealTypeSelections: MealTypeSelection[];
    onSetMealTypeSelection: (index: number) => void;
}) => {
    const styles = useStyles();
    return (
        <View style={styles.badgeContainer}>
            {mealTypeSelections.map((mealType: MealTypeSelection, index) => (
                <Chip
                    containerStyle={{ width: 100 }}
                    type={"solid"}
                    onPress={() => onSetMealTypeSelection(index)}
                    key={mealType.type}
                    selected={mealType.selected}
                >
                    {mealType.type}
                </Chip>
            ))}
        </View>
    );
};
