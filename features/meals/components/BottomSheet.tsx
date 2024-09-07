import styled from "@emotion/native";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Text } from "react-native-paper";
import { UseMealsType } from "../hooks/useMeals";
import { useState } from "react";

const StyledBottomSheetView = styled(BottomSheetView)`
    padding: ${(props) => props.theme.spacing(2)};
    flex: 1;
`;

type BottomSheetProps = Pick<UseMealsType, "bottomSheetModalRef">;

const BottomSheet = ({ bottomSheetModalRef }: BottomSheetProps) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={["50%"]}
            >
                <StyledBottomSheetView>
                    <Text>Awesome 🎉</Text>
                </StyledBottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

export { BottomSheet };
