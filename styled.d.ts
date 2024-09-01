// themed.d.ts
import "@rneui/themed";
import { Palette, ExtraPalette } from "./theme/theme";

declare module "@rneui/themed" {
    export interface Colors {
        tertiary: ExtraPalette;
        info: Palette;
        err: Palette;
        warn: Palette;
    }

    export interface ChipProps {
        selected?: boolean;
    }
}
