import { TextInput, TextInputProps } from "react-native-paper";

export const BottomSheetTextInput = ({ ...props }: TextInputProps) => (
    <TextInput
        {...props}
        outlineColor="grey"
        activeOutlineColor="black"
        style={{
            backgroundColor: "white",
        }}
        contentStyle={{
            color: "black",
        }}
        placeholder="Enter meal name"
        mode="outlined"
    />
);
