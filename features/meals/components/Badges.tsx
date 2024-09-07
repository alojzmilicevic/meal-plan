import styled from "@emotion/native";
import { Chip } from "react-native-paper";
import { MealTypeSelection } from "../interface/interface";

const BadgeContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing(2)};
    padding: ${(props) => props.theme.spacing(3)};
    flex-wrap: wrap;
    justify-content: center;
`;

export const Badges = ({
    mealTypeSelections,
    onSetMealTypeSelection,
}: {
    mealTypeSelections: MealTypeSelection[];
    onSetMealTypeSelection: (index: number) => void;
}) => (
    <BadgeContainer>
        {mealTypeSelections.map((mealType: MealTypeSelection, index) => (
            <Chip
                showSelectedCheck={false}
                onPress={() => onSetMealTypeSelection(index)}
                key={mealType.type}
                selected={mealType.selected}
                showSelectedOverlay={mealType.selected}
            >
                {mealType.type}
            </Chip>
        ))}
    </BadgeContainer>
);
