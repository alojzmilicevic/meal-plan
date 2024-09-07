import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "../interface/interface";
import { RootState } from "@/store";

export const meals: Meal[] = [
    { name: "Grilled Salmon", category: "fish" },
    { name: "Chicken Salad", category: "healthy" },
    { name: "Beef Stew", category: "meat" },
    { name: "Vegetable Soup", category: "vegetarian" },
    { name: "Fish Tacos", category: "fish" },
    { name: "Pasta Alfredo", category: "simple" },
    { name: "Quinoa Bowl", category: "healthy" },
    { name: "Steak Frites", category: "meat" },
    { name: "Steak combo", category: "meat" },
    { name: "Humper", category: "meat" },
    { name: "a", category: "meat" },
    { name: "b", category: "meat" },
    { name: "c", category: "meat" },
    { name: "d", category: "meat" },
    { name: "e", category: "meat" },
];

interface MealState {
    meals: Meal[];
}

const initialState: MealState = {
    meals,
};

const mealSlice = createSlice({
    name: "example",
    initialState,
    reducers: {
        addMeal: (state, { payload }: PayloadAction<{ meal: Meal }>) => {
            state.meals.push(payload.meal);
        },
        removeMeal: (state, { payload }: PayloadAction<{ index: number }>) => {
            state.meals.splice(payload.index, 1);
        },
    },
});

export const { addMeal, removeMeal } = mealSlice.actions;

export const getMeals = (state: RootState) => state.app.meals;


export default mealSlice.reducer;
