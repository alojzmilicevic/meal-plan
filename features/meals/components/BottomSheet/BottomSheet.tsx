import styled from "@emotion/native";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Button, Chip, Text } from "react-native-paper";
import { View } from "react-native";
import { UseMealsType } from "../../hooks/useMeals";
import { mealTypes } from "../../interface/interface";
import { BottomSheetTextInput } from "./components/TextInput";
import { useBottomSheet } from "./useBottomSheet";

const StyledBottomSheetView = styled(BottomSheetView)`
    flex: 1;
    display: flex;
    gap: ${({ theme }) => theme.spacing(7)};

    // Define paddingVertical and paddingHorizontal as variables stupid editor workaround
    ${({ theme }) => {
        const paddingVertical = theme.spacing(2);
        const paddingHorizontal = theme.spacing(8);

        return `
    padding: ${paddingVertical} ${paddingHorizontal};
  `;
    }}
`;

const CategoryContainer = styled(View, {
    shouldForwardProp: (prop) => prop !== "error",
})<{ error: string }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(1)};
    border: 1px solid ${({ error }) => (error ? "red" : "transparent")};
    border-radius: 4px;
    padding: ${({ theme }) => theme.spacing(2)};
`;

export type BottomSheetProps = Pick<
    UseMealsType,
    "bottomSheetModalRef" | "addMeal"
> & {};

const BottomSheet = (props: BottomSheetProps) => {
    const { name, onSetSelectedType, selected, onSetName, onSubmit, error } =
        useBottomSheet(props);

    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={props.bottomSheetModalRef}
                index={0}
                snapPoints={["100%"]}
            >
                <StyledBottomSheetView>
                    <View>
                        <Text variant="displaySmall">Create new meal</Text>
                        <Text variant="bodyLarge" style={{ color: "grey" }}>
                            Add a new meal to your planner
                        </Text>
                    </View>
                    <View>
                        <Text variant="bodyLarge" style={{ marginBottom: 8 }}>
                            Meal name
                        </Text>
                        <BottomSheetTextInput
                            error={!!error.name}
                            value={name}
                            onChangeText={onSetName}
                        />
                        <Text
                            variant="bodySmall"
                            style={{ color: "red", marginBottom: 16 }}
                        >
                            {error.name}
                        </Text>
                        <Text variant="bodyLarge">Meal type</Text>

                        <CategoryContainer error={error.selected}>
                            {mealTypes.map((type, index) => (
                                <Chip
                                    onPress={() => onSetSelectedType(index)}
                                    key={index}
                                    selected={selected[index]}
                                    showSelectedCheck={false}
                                    showSelectedOverlay={true}
                                >
                                    {type}
                                </Chip>
                            ))}
                        </CategoryContainer>
                        <Text
                            variant="bodySmall"
                            style={{ color: "red", marginTop: 8 }}
                        >
                            {error.selected}
                        </Text>
                    </View>
                    <Button
                        mode="contained"
                        style={{ borderRadius: 4, backgroundColor: "black" }}
                        onPress={onSubmit}
                    >
                        Add Meal
                    </Button>
                </StyledBottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

export { BottomSheet };
