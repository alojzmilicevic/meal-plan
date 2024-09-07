import { Dimensions } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

interface UseSwipeableItemReturn {
    panGesture: ReturnType<typeof Gesture.Pan>;
    animatedStyle: ReturnType<typeof useAnimatedStyle>;
}

type OnDeleteFunction = () => void;

// Get screen width
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const BUTTON_WIDTH = 140; // The width of the hidden button
const SWIPE_THRESHOLD = -(SCREEN_WIDTH * 0.9); // Set threshold to the last 5% of the screen
const SWIPE_DIRECTION_THRESHOLD = 10; // Threshold for determining swipe direction

export const useSwipeableItem = (
    onDelete: OnDeleteFunction
): UseSwipeableItemReturn => {
    const translateX = useSharedValue(0); // For the actual swipe position
    const initialState = useSharedValue({ absX: 0, absY: 0, relX: 0 }); // Store absolute and relative positions
    const isHorizontalSwipe = useSharedValue(false); // Track swipe direction decision

    // Gesture for handling pan (swipe)
    const panGesture = Gesture.Pan()
        .manualActivation(true) // Allow manual gesture activation
        .onBegin((e) => {
            initialState.value = {
                absX: e.absoluteX, // Store the initial absolute X for direction detection
                absY: e.absoluteY, // Store the initial absolute Y for direction detection
                relX: translateX.value, // Store the relative X for managing the swipe
            };
            isHorizontalSwipe.value = false; // Reset swipe direction decision
        })
        .onTouchesMove((e, state) => {
            const dx = e.changedTouches[0].absoluteX - initialState.value.absX; // Calculate horizontal movement (absolute)
            const dy = e.changedTouches[0].absoluteY - initialState.value.absY; // Calculate vertical movement (absolute)

            // Detect if gesture is horizontal or vertical, using a threshold
            if (
                Math.abs(dx) > SWIPE_DIRECTION_THRESHOLD &&
                !isHorizontalSwipe.value
            ) {
                isHorizontalSwipe.value = true; // It's a horizontal swipe
                state.activate(); // Activate swipe gesture
            } else if (
                Math.abs(dy) > SWIPE_DIRECTION_THRESHOLD &&
                !isHorizontalSwipe.value
            ) {
                state.fail(); // Fail if it's a vertical gesture
            }
        })
        .onUpdate((event) => {
            if (isHorizontalSwipe.value) {
                // Handle horizontal swipe
                translateX.value = Math.max(
                    initialState.value.relX + event.translationX, // Use relative translationX starting from where the swipe began
                    -SCREEN_WIDTH
                );
                if (translateX.value > 0) {
                    translateX.value = 0; // Prevent right swipe
                }
            }
        })
        .onEnd(() => {
            if (isHorizontalSwipe.value) {
                if (translateX.value < SWIPE_THRESHOLD) {
                    // If swiped past the threshold, trigger the delete function
                    runOnJS(onDelete)();
                } else if (translateX.value < -BUTTON_WIDTH / 2) {
                    // Reveal the hidden button when swiped past half the button width
                    translateX.value = withTiming(-BUTTON_WIDTH);
                } else {
                    // If not swiped enough, return to original position
                    translateX.value = withTiming(0);
                }
            }
        });

    // Animated style for List.Item
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return { panGesture, animatedStyle };
};
