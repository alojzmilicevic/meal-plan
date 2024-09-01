import { Meal } from "../meals/interface/interface";

type DayType = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export type Day = {
    day: DayType;
    lunch: Meal | null;
    dinner: Meal | null;
};

export type Meals = Day[] & { length: 7 };