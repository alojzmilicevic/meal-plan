import styled from "@emotion/native";
import { FAB, Text } from "react-native-paper";
import { Badges } from "../components/Badges";
import { MealList } from "../components/MealList";
import { useMeals } from "../hooks/useMeals";
import { BottomSheet } from "../components/BottomSheet/BottomSheet";

const StyledContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: ${(props) => props.theme.spacing(2)};
    flex: 1;
`;

const StyledFab = styled(FAB)`
    position: absolute;
    margin: ${(props) => props.theme.spacing(2)};
    right: 0;
    bottom: 0;
`;

const ScreenContainer = styled.View`
    padding-top: ${(props) => props.theme.spacing(3)};
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;

export const Meals = () => {
    const {
        mealTypeSelections,
        onSetSelectedType,
        filteredMeals,
        deleteMeal,
        addMeal,
        bottomSheetModalRef,
        handlePresentModalPress,
    } = useMeals();

    return (
        <ScreenContainer>
            <StyledContainer>
                <Text variant="headlineLarge">Mina rätter</Text>
                <Badges
                    mealTypeSelections={mealTypeSelections}
                    onSetMealTypeSelection={onSetSelectedType}
                />
                <MealList
                    filteredMeals={filteredMeals}
                    deleteMeal={deleteMeal}
                />
            </StyledContainer>

            <StyledFab icon="plus" onPress={handlePresentModalPress} />
            <BottomSheet
                bottomSheetModalRef={bottomSheetModalRef}
                addMeal={addMeal}
            />
        </ScreenContainer>
    );
};
