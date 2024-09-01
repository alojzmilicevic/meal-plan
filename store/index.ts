import mealSlice from "@/features/meals/store/mealSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: { app: mealSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
