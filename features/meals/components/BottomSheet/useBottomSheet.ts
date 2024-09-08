import { useState } from "react";
import { BottomSheetProps } from "./BottomSheet";
import { mealTypes } from "../../interface/interface";

type UseBottomSheetType = {
    name: string;
    selected: boolean[];
    onSetName: (name: string) => void;
    onSetSelectedType: (index: number) => void;
    onSubmit: () => void;
    error: ErrorType;
};

type ErrorType = {
    name: string;
    selected: string;
};

export function useBottomSheet({
    addMeal,
    bottomSheetModalRef,
}: BottomSheetProps): UseBottomSheetType {
    const [name, setName] = useState("");
    const [selected, setSelected] = useState(new Array(5).fill(false)); // Ensures 5 elements in the array
    const [error, setError] = useState<ErrorType>({ name: "", selected: "" });

    const onSetSelectedType = (index: number) => {
        const tmp = selected.map((_, i) => i === index); // Set only the selected index to true, others to false
        setSelected(tmp);
        setError({ ...error, selected: "" });
    };

    const onSetName = (name: string) => {
        setName(name);

        if (error.name) {
            setError({ ...error, name: "" });
        }
    };

    const handleValidation = () => {
        const err = {
            name: "",
            selected: "",
        };

        if (name === "") {
            err.name = "Name is required";
        }

        if (selected.every((value) => !value)) {
            err.selected = "Please select a meal type";
        }

        setError(err);

        return !err.name && !err.selected;
    };

    const onSubmit = () => {
        const isValid = handleValidation();

        if (!isValid) {
            return;
        }

        setSelected(new Array(5).fill(false));
        setName("");
        addMeal({
            name,
            category: mealTypes[selected.indexOf(true)],
        });
        bottomSheetModalRef.current?.close();
    };

    return {
        name,
        onSetName,
        selected,
        onSetSelectedType,
        onSubmit,
        error,
    };
}
