export type MealType = "healthy" | "fish" | "meat" | "simple" | "vegetarian";

export type Meal = {
    name: string;
    category?: MealType;
};

export const mealTypes: MealType[] = [
    "healthy",
    "fish",
    "meat",
    "simple",
    "vegetarian",
];

export type MealTypeSelection = {
    type: MealType;
    selected: boolean;
};
