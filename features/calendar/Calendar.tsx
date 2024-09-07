/*import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Day, Meals } from "./interface";

const mealPlan: Meals = [
    {
        day: "monday",
        lunch: { name: "Pasta" },
        dinner: null,
    },
    {
        day: "tuesday",
        lunch: { name: "Turkey" },
        dinner: { name: "Bolognese" },
    },
    {
        day: "wednesday",
        lunch: null,
        dinner: { name: "mum Potatoes" },
    },
    {
        day: "thursday",
        lunch: { name: "Veggie Wrap" },
        dinner: { name: "Chicken Stir-Fry" },
    },
    {
        day: "friday",
        lunch: null,
        dinner: { name: "Pork Chops" },
    },
    {
        day: "saturday",
        lunch: { name: "BLT Sandwich" },
        dinner: { name: "Beef Tacos" },
    },
    {
        day: "sunday",
        lunch: { name: "Caprese Salad" },
        dinner: { name: "Grilled Chicken" },
    },
];

const StyledView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.primary};
    background-color: ${ props => props.theme.colors.main};
`;

const StyledButton = styled(Button)`
    width: 150px;
`;

const Container = styled.View`
    display: flex;
    padding: ${({ theme }) => theme.spacing(3)};
    padding-top: ${({ theme }) => theme.spacing(6)};
    gap: ${({ theme }) => theme.spacing(2)};
`;

const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: grey;
`;

const Body = styled.View`
    display: flex;
    flex-direction: column;
    background-color: green;
    gap: ${({ theme }) => theme.spacing(2)};
`;

const DayRow = ({ lunch, dinner }: Day) => {
    return (
        <StyledView>
            <StyledButton
                mode="contained"
                onPress={() => console.log("pressed")}
            >
                {lunch?.name}
                {!lunch && <Icon source="plus" size={20} color="white" />}
            </StyledButton>
            <StyledButton
                mode="contained"
                onPress={() => console.log("pressed")}
            >
                {dinner?.name}
                {!dinner && <Icon source="plus" size={20} color="white" />}
            </StyledButton>
        </StyledView>
    );
};

export const Calendar = () => (
    <Container>
        <Text variant="headlineLarge">Veckoschema v.7</Text>
        <Header>
            <Text variant="headlineSmall">Lunch</Text>
            <Text variant="headlineSmall">Middag</Text>
        </Header>
        <Body>
            {mealPlan.map((day: Day) => (
                <DayRow key={day.day} {...day} />
            ))}
        </Body>
        <StatusBar style="auto" />
    </Container>
);
*/
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const App = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;