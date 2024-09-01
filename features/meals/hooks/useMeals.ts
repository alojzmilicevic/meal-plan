import { useState } from "react";
import { Meal, MealTypeSelection, mealTypes } from "../interface/interface";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    getMeals,
    removeMeal,
    addMeal as addMealAction,
} from "../store/mealSlice";

export type UseMealsType = {
    mealTypeSelections: MealTypeSelection[];
    onSetSelectedType: (n: number) => void;
    filteredMeals: Meal[];
    deleteMeal: (n: number) => void;
    addMeal: (meal: Meal) => void;
};

export function useMeals(): UseMealsType {
    const meals = useAppSelector(getMeals);
    const dispatch = useAppDispatch();
    const [mealTypeSelections, setMealTypeSelections] = useState<
        MealTypeSelection[]
    >(
        mealTypes.map((type) => ({
            selected: false,
            type,
        }))
    );

    const deleteMeal = (n: number) => dispatch(removeMeal({ index: n }));
    const addMeal = (meal: Meal) => dispatch(addMealAction({ meal }));

    const onSetSelectedType = (index: number) => {
        const tmp = [...mealTypeSelections];
        tmp[index].selected = !tmp[index].selected;
        setMealTypeSelections(tmp);
    };

    const selectedMealTypes = mealTypeSelections
        .filter((selections) => selections.selected)
        .map((selections) => selections.type);

    // Filter the meals based on the selection
    const filteredMeals: Meal[] =
        selectedMealTypes.length === 0
            ? meals // Show all meals if none are selected
            : meals.filter(
                  (meal) =>
                      meal.category && selectedMealTypes.includes(meal.category)
              );
    return {
        mealTypeSelections,
        onSetSelectedType,
        filteredMeals,
        deleteMeal,
        addMeal,
    };
}
