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

import { View, Text } from "react-native";

export const Calendar = () => {
    return (
        <View style={{ backgroundColor: "red" }}>
            <Text>Calendar</Text>
        </View>
    );
};
