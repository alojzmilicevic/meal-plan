import { Spacer } from "@/components/Spacer";
import { SwipeableListItem } from "@/components/swipeableListItem/SwipeableListItem";
import styled from "@emotion/native";
import { ScrollView } from "react-native";
import { Icon, Text } from "react-native-paper";
import { UseMealsType } from "../hooks/useMeals";

type MealListProps = Pick<UseMealsType, "filteredMeals" | "deleteMeal">;

const StyledScrollView = styled(ScrollView)`
    width: 100%;
`;

const EmptyContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NoMealsView = () => (
    <EmptyContainer>
        <Icon source="silverware" size={64} />
        <Text variant="displayMedium">No meals added</Text>
    </EmptyContainer>
);

export const MealList = ({ filteredMeals, deleteMeal }: MealListProps) => (
    <StyledScrollView>
        {filteredMeals.map((meal, index) => (
            <SwipeableListItem
                title={meal.name}
                key={meal.name}
                onDelete={() => deleteMeal(index)}
            ></SwipeableListItem>
        ))}

        {filteredMeals.length === 0 && <NoMealsView />}
        <Spacer />
    </StyledScrollView>
);
