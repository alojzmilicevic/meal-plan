import styled from "@emotion/native";
import React from "react";
import { GestureDetector } from "react-native-gesture-handler";
import { Divider, List, ListItemProps } from "react-native-paper";
import Animated from "react-native-reanimated";
import { Button } from "../Button";
import { BUTTON_WIDTH, useSwipeableItem } from "./useSwipeableListItem";

// Styled components using Emotion
const HiddenButton = styled(Button)`
    border-radius: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const HiddenButtonContainer = styled.View`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.error};
    width: ${() => `${BUTTON_WIDTH}px`};
`;

const SwipeRoot = styled.View`
    position: relative;
    background-color: ${({ theme }) => theme.colors.error};
`;

const StyledAnimatedView = styled(Animated.View)`
    background-color: ${({ theme }) => theme.colors.surface};
`;

export const SwipeableListItem = ({
    title,
    onDelete,
    ...rest
}: ListItemProps & { onDelete: () => void }) => {
    // Use the custom hook to manage swipe gestures and animations
    const { panGesture, animatedStyle } = useSwipeableItem(onDelete);

    return (
        <SwipeRoot>
            <HiddenButtonContainer>
                <HiddenButton
                    variant="error"
                    onPress={onDelete}
                    icon="delete"
                    labelStyle={{ fontSize: 16 }}
                >
                    Delete
                </HiddenButton>
            </HiddenButtonContainer>
            <Divider />
            <GestureDetector gesture={panGesture}>
                <StyledAnimatedView style={animatedStyle}>
                    <List.Item {...rest} title={title} />
                </StyledAnimatedView>
            </GestureDetector>
        </SwipeRoot>
    );
};
